export const revalidate = 60; // 60 segundos

import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';

import { Pagination } from '@/components/ui/pagination/Pagination';
import { Title } from '@/components/ui/title/Title';
import { ProductGrid } from '@/components/products';

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function CategoryPage(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const { id } = params;

  if (!id) {
    notFound();
  }

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    category: id,
  });

  if (products.length === 0) {
    redirect('/');
  }

  const labels: Record<string, string> = {
    dashboards: 'Dashboards',
    ecommerce: 'E-Commerce',
    'landing-pages': 'Landing Pages',
    'ui-kits': 'UI Kits',
    saas: 'SaaS',
    portfolio: 'Portfolios',
  };

  const categoryTitle = labels[id] ?? id;

  return (
    <>
      <Title title={categoryTitle} subtitle={`Todos los productos de ${categoryTitle}`} className="mb-2" />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
