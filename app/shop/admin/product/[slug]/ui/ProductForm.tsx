'use client';

import { useForm } from 'react-hook-form';
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
  images?: FileList;
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
    formState: { isValid },
  } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags?.join(', '),
      description: product.description ?? '',
      images: undefined,
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
            <Label htmlFor="images" className="mb-1 flex items-center gap-2">
              <IoCloudUploadOutline size={18} /> Subir nuevas imágenes
            </Label>
            <Input
              id="images"
              type="file"
              {...register('images')}
              multiple
              accept="image/png, image/jpeg, image/avif"
              className="cursor-pointer file:cursor-pointer"
            />
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

          {imageChunks.length === 0 && (
            <div className="border-muted-foreground/30 bg-muted/20 flex h-32 items-center justify-center rounded-md border border-dashed">
              <span className="text-muted-foreground text-sm">Sin imágenes</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
