'use client';

import { useForm } from 'react-hook-form';
import { Category, Product, ProductImage as ProductWithImage } from '@/interfaces';
import { createUpdateProduct, deleteProductImage } from '@/actions';
import { useRouter } from 'next/navigation';
import { ProductImage } from '@/components/product/product-image/ProductImage';

interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[] };
  categories: Category[];
}

interface FormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  tags: string;
  categoryId: string;
  images?: FileList;
}

export const ProductForm = ({ product, categories }: Props) => {
  const router = useRouter();

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
    formData.append('price', productToSave.price.toString());
    formData.append('inStock', productToSave.inStock.toString());
    formData.append('tags', productToSave.tags);
    formData.append('categoryId', productToSave.categoryId);

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
    <form onSubmit={handleSubmit(onSubmit)} className="mb-16 grid grid-cols-1 gap-3 px-5 sm:grid-cols-2 sm:px-0">
      {/* Textos */}
      <div className="w-full">
        <div className="mb-2 flex flex-col">
          <span className="dark:text-zinc-200">Título</span>
          <input
            type="text"
            className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            {...register('title', { required: true })}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <span className="dark:text-zinc-200">Slug</span>
          <input
            type="text"
            className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            {...register('slug', { required: true })}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <span className="dark:text-zinc-200">Descripción</span>
          <textarea
            rows={5}
            className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            {...register('description', { required: true })}
          ></textarea>
        </div>

        <div className="mb-2 flex flex-col">
          <span className="dark:text-zinc-200">Price</span>
          <input
            type="number"
            className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            {...register('price', { required: true, min: 0 })}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <span className="dark:text-zinc-200">Tags</span>
          <input
            type="text"
            className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            {...register('tags', { required: true })}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <span className="dark:text-zinc-200">Categoria</span>
          <select
            className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            {...register('categoryId', { required: true })}
          >
            <option value="">[Seleccione]</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn-primary w-full">Guardar</button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="w-full">
        <div className="mb-2 flex flex-col">
          <span className="dark:text-zinc-200">Inventario</span>
          <input
            type="number"
            className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            {...register('inStock', { required: true, min: 0 })}
          />
        </div>

        {/* As checkboxes */}
        <div className="flex flex-col">
          <div className="mb-2 flex flex-col">
            <span className="dark:text-zinc-200">Fotos</span>
            <input
              type="file"
              {...register('images')}
              multiple
              className="rounded-md border bg-gray-200 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              accept="image/png, image/jpeg, image/avif"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {product.ProductImage?.map((image) => (
              <div key={image.id}>
                <ProductImage alt={product.title ?? ''} src={image.url} width={300} height={300} className="rounded-t shadow-md" />

                <button type="button" onClick={() => deleteProductImage(image.id, image.url)} className="btn-danger w-full rounded-b-xl">
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};
