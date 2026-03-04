'use client';

import { useForm } from 'react-hook-form';
import { useCallback, useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Category, Product, ProductImage as ProductWithImage } from '@/interfaces';
import { createUpdateProduct, deleteProductImage } from '@/actions';
import { useRouter } from 'next/navigation';
import { ProductImage } from '@/components/product/product-image/ProductImage';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { IoCloudUploadOutline, IoTrashOutline } from 'react-icons/io5';
import Image from 'next/image';

interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[] };
  categories: Category[];
}

interface FormInputs {
  title: string;
  slug: string;
  description: string;
  price_usd: number;
  tags: string;
  categoryId: string;
  file_url?: string;
  images?: File[];
}

export const ProductForm = ({ product, categories }: Props) => {
  const router = useRouter();

  // Create chunks for the image carousel
  const chunkSize = 6;
  const imageChunks = [];
  if (product.ProductImage) {
    for (let i = 0; i < product.ProductImage.length; i += chunkSize) {
      imageChunks.push(product.ProductImage.slice(i, i + chunkSize));
    }
  }

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags?.join(', '),
      description: product.description ?? '',
      images: undefined,
    },
  });

  const [selectedPreviews, setSelectedPreviews] = useState<{ file: File; url: string }[]>([]);
  const previewsRef = useRef(selectedPreviews);

  // Create chunks for the selected previews carousel
  const previewChunks = [];
  for (let i = 0; i < selectedPreviews.length; i += chunkSize) {
    previewChunks.push(selectedPreviews.slice(i, i + chunkSize));
  }

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newPreviews = acceptedFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

      setSelectedPreviews((prev) => [...prev, ...newPreviews]);

      const currentImages = getValues('images') || [];
      setValue('images', [...currentImages, ...acceptedFiles], { shouldValidate: true });
    },
    [getValues, setValue],
  );

  const removeFile = (index: number) => {
    setSelectedPreviews((prev) => {
      const newPrev = [...prev];
      URL.revokeObjectURL(newPrev[index].url);
      newPrev.splice(index, 1);
      return newPrev;
    });

    const currentImages = getValues('images') || [];
    const newImages = [...currentImages];
    newImages.splice(index, 1);
    setValue('images', newImages.length > 0 ? newImages : undefined, { shouldValidate: true });
  };

  useEffect(() => {
    previewsRef.current = selectedPreviews;
  }, [selectedPreviews]);

  useEffect(() => {
    return () => {
      previewsRef.current.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/avif': ['.avif'],
    },
  });

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    const { images, ...productToSave } = data;

    if (product.id) {
      formData.append('id', product.id ?? '');
    }

    formData.append('title', productToSave.title);
    formData.append('slug', productToSave.slug);
    formData.append('description', productToSave.description);
    formData.append('price_usd', productToSave.price_usd.toString());
    formData.append('tags', productToSave.tags);
    formData.append('categoryId', productToSave.categoryId);
    formData.append('file_url', product.file_url ?? '');

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }

    const { ok, product: updatedProduct } = await createUpdateProduct(formData);

    if (!ok) {
      alert('Producto no se pudo actualizar');
      return;
    }

    router.replace(`/shop/admin/product/${updatedProduct?.slug}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {/* Textos */}
      <div className="flex w-full flex-col gap-6">
        {/* Información General */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold dark:text-zinc-100">Información General</h2>
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" type="text" {...register('title', { required: true })} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="slug">Slug URL</Label>
            <Input id="slug" type="text" {...register('slug', { required: true })} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea id="description" className="h-[200px] resize-none" {...register('description', { required: true })} />
          </div>
        </div>

        {/* Detalles del Producto */}
        <div className="mt-2 flex flex-col gap-4">
          <h2 className="text-xl font-bold dark:text-zinc-100">Detalles del Producto</h2>
          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Precio (USD)</Label>
            <Input id="price" type="number" step="0.01" {...register('price_usd', { required: true, min: 0 })} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tags">Etiquetas (separadas por coma)</Label>
            <Input id="tags" type="text" {...register('tags', { required: true })} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="categoryId">Categoría</Label>
            <select
              id="categoryId"
              className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800"
              {...register('categoryId', { required: true })}
            >
              <option value="" disabled>
                [Seleccione una categoría]
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button type="submit" className="mt-4 w-full">
          Guardar Cambios
        </Button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="flex w-full flex-col gap-6">
        {/* Imágenes del Producto */}
        <div className="mt-2 flex flex-col gap-6">
          <h2 className="text-xl font-bold dark:text-zinc-100">Imágenes del Producto</h2>
          <div className="flex flex-col gap-2">
            <Label className="mb-1 flex items-center gap-2">
              <IoCloudUploadOutline size={18} /> Subir nuevas imágenes
            </Label>

            <div
              {...getRootProps()}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-md border-dashed p-20 transition-colors ${
                isDragActive
                  ? 'border-2 border-blue-500 bg-blue-500/10'
                  : 'bg-muted/20 hover:bg-muted/50 border-2 border-gray-400 dark:border-zinc-700'
              }`}
            >
              <input {...getInputProps()} />
              <IoCloudUploadOutline size={48} className="mb-4 text-gray-400" />
              {isDragActive ? (
                <p className="text-sm font-medium text-blue-500">Suelta los archivos aquí...</p>
              ) : (
                <div className="text-center">
                  <p className="text-sm font-medium dark:text-gray-300">Arrastra y suelta imágenes aquí, o haz clic para seleccionar</p>
                  <p className="mt-2 text-xs text-gray-500">Formatos soportados: PNG, JPG, JPEG, AVIF</p>
                </div>
              )}
            </div>

            {previewChunks.length > 0 && (
              <div className="mt-4">
                <p className="text-muted-foreground mb-3 text-sm font-medium">Imágenes seleccionadas para subir:</p>
                <Carousel className="w-full">
                  <CarouselContent>
                    {previewChunks.map((chunk, chunkIndex) => (
                      <CarouselItem key={`preview-chunk-${chunkIndex}`}>
                        <div className="grid grid-cols-2 sm:grid-cols-3">
                          {chunk.map((preview, index) => {
                            const globalIndex = chunkIndex * chunkSize + index;
                            return (
                              <div
                                key={preview.url}
                                className="group border-border bg-muted/20 relative overflow-hidden rounded-md border transition-all"
                              >
                                <Image alt="preview" src={preview.url} width={300} height={300} className="w-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                  <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeFile(globalIndex);
                                    }}
                                  >
                                    <IoTrashOutline />
                                  </Button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {previewChunks.length > 1 && (
                    <div className="mt-4 flex justify-center gap-2">
                      <CarouselPrevious size="lg" className="static translate-y-0" />
                      <CarouselNext size="lg" className="static translate-y-0" />
                    </div>
                  )}
                </Carousel>
              </div>
            )}
          </div>

          {imageChunks.length > 0 && (
            <Carousel className="w-full">
              <CarouselContent>
                {imageChunks.map((chunk, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {chunk.map((image) => (
                        <div
                          key={image.id}
                          className="group border-border bg-muted/20 relative overflow-hidden rounded-md border transition-all"
                        >
                          <ProductImage
                            alt={product.title ?? ''}
                            src={image.url}
                            width={300}
                            height={300}
                            className="aspect-square w-full object-cover"
                          />

                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                            <Button type="button" variant="destructive" size="icon" onClick={() => deleteProductImage(image.id, image.url)}>
                              <IoTrashOutline size={18} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {imageChunks.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  <CarouselPrevious size="lg" className="static translate-y-0" />
                  <CarouselNext size="lg" className="static translate-y-0" />
                </div>
              )}
            </Carousel>
          )}

          {/* {imageChunks.length === 0 && (
            <div className="border-muted-foreground/30 bg-muted/20 flex h-32 items-center justify-center rounded-md border border-dashed">
              <span className="text-muted-foreground text-sm">Sin imágenes</span>
            </div>
          )} */}
        </div>
      </div>
    </form>
  );
};
