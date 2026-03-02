export const revalidate = 60; // 60 segundos

import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';

import { Pagination } from '@/components/ui/pagination/Pagination';
import { Title } from '@/components/ui/title/Title';
import { ProductGrid } from '@/components/products';

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
  });

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <>
      <Title title="Templates Store" subtitle="High-quality interfaces designed to help you build faster." className="mb-8" />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
