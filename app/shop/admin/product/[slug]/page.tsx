import { getCategories, getProductBySlug } from '@/actions';
import { Title } from '@/components/ui';
import { redirect } from 'next/navigation';
import { ProductForm } from './ui/ProductForm';
import { storage } from '@/lib/appwrite-server';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const [product, categories] = await Promise.all([getProductBySlug(slug), getCategories()]);

  // Todo: new
  if (!product && slug !== 'new') {
    redirect('/shop/admin/products');
  }

  let zipFileName = null;
  if (product && product.file_url) {
    try {
      const fileMeta = await storage.getFile(process.env.APPWRITE_ZIPS_BUCKET || '', product.file_url);
      zipFileName = fileMeta.name;
    } catch (e) {
      console.log('Error fetching zip file name:', e);
    }
  }

  const title = slug === 'new' ? 'Nuevo producto' : 'Editar producto';

  return (
    <>
      <Title title={title} />

      <ProductForm product={product ?? {}} categories={categories} initialZipFileName={zipFileName} />
    </>
  );
}
