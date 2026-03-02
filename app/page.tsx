import React from 'react';
import Link from 'next/link';
import { Footer, TopMenu } from '@/components/ui';
import { getPaginatedProductsWithImages } from '@/actions';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-[linear-gradient(105deg,#0a0a2c_0%,#121217_50%,#311b52_100%)] px-6">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="mb-8 text-[54px] leading-[1.1] font-bold tracking-tight text-white">
            Build your next project <br />
            faster with premium <br />
            templates
          </h1>
          <p className="mb-10 max-w-[500px] text-[15px] leading-relaxed text-gray-300">
            Access high-quality, professionally designed UI kits, dashboards, and e-commerce templates to speed up your development
            workflow.
          </p>
          <Link href="/shop">
            <Button className="h-11 rounded-lg bg-linear-to-r from-[#5D5FEF] to-[#311b52] px-7 py-3 text-[13px] font-semibold tracking-wide text-white transition-all hover:brightness-110 active:scale-95">
              Browse Templates
            </Button>
          </Link>
        </div>

        <div className="relative flex h-[480px] items-center justify-end">
          {/* Recreating the complex floating UI collage with reduced height */}
          <div className="relative h-full w-full max-w-[650px] perspective-[1000px]">
            {/* Main Dashboard - Center */}
            <div className="absolute top-1/2 left-1/2 z-20 aspect-[1.4/1] w-[420px] -translate-x-1/2 -translate-y-1/2 -rotate-2 transform overflow-hidden rounded-xl border border-white/10 bg-[#18181F] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 p-3">
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500/50"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="h-1.5 w-20 rounded bg-white/5"></div>
              </div>
              <div className="grid grid-cols-3 gap-2.5 p-3">
                <div className="col-span-1 h-20 rounded-lg border border-white/5 bg-white/5"></div>
                <div className="col-span-1 h-20 rounded-lg border border-white/5 bg-white/5"></div>
                <div className="col-span-1 h-20 rounded-lg border border-white/5 bg-white/5"></div>
                <div className="from-brand-purple/10 border-brand-purple/20 col-span-3 h-24 rounded-lg border bg-linear-to-br to-transparent"></div>
              </div>
            </div>

            {/* Sidebar - Left */}
            <div className="absolute top-[10%] left-[0%] z-10 h-[280px] w-[140px] rotate-[-8deg] transform space-y-3.5 rounded-xl border border-white/10 bg-[#18181F] p-3.5 shadow-xl">
              <div className="bg-brand-purple/20 mb-5 h-7 w-7 rounded"></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="h-3.5 w-3.5 rounded bg-white/5"></div>
                  <div className="h-1 flex-1 rounded bg-white/10"></div>
                </div>
              ))}
            </div>

            {/* Top Widgets */}
            <div className="absolute top-[8%] left-[35%] z-30 flex h-[32px] w-[100px] rotate-[4deg] transform items-center justify-around rounded-lg border border-white/10 bg-[#18181F] px-2 shadow-lg">
              <div className="h-3 w-3 rounded-full bg-white/10"></div>
              <div className="h-3 w-3 rounded-full bg-white/10"></div>
              <div className="h-3 w-3 rounded-full bg-white/10"></div>
            </div>

            <div className="absolute top-[5%] right-[25%] z-10 h-[80px] w-[120px] -rotate-3 transform space-y-1.5 rounded-xl border border-white/10 bg-[#18181F] p-2.5 shadow-lg">
              <div className="h-1.5 w-full rounded bg-white/10"></div>
              <div className="h-1.5 w-2/3 rounded bg-white/5"></div>
              <div className="bg-brand-purple/20 mt-1.5 h-6 w-full rounded"></div>
            </div>

            {/* Right Chart */}
            <div className="absolute top-[30%] right-[0%] z-10 h-[200px] w-[180px] rotate-6 transform rounded-xl border border-white/10 bg-[#18181F] p-3.5 shadow-xl">
              <div className="mb-3 h-1.5 w-1/2 rounded bg-white/10"></div>
              <div className="flex h-24 items-end gap-1.5">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="bg-brand-purple/40 flex-1 rounded-t-sm"></div>
                ))}
              </div>
            </div>

            {/* Bottom Elements */}
            <div className="absolute bottom-[15%] left-[10%] z-30 flex h-[26px] w-[160px] -rotate-2 transform items-center gap-2.5 rounded-full border border-white/10 bg-[#18181F] px-3 shadow-lg">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="bg-brand-purple h-full w-1/2"></div>
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
            </div>

            <div className="absolute bottom-[10%] left-[38%] z-30 flex h-[40px] w-[120px] rotate-2 transform items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-[#18181F] shadow-lg">
              <div className="h-5 w-5 rounded-full bg-gray-500"></div>
              <div className="bg-brand-purple h-5 w-5 rounded-full"></div>
              <div className="h-5 w-5 rounded-full bg-emerald-500"></div>
            </div>

            <div className="absolute right-[15%] bottom-[5%] z-10 h-[150px] w-[140px] rotate-[-4deg] transform space-y-2.5 rounded-xl border border-white/10 bg-[#18181F] p-3.5 shadow-xl">
              <div className="h-1.5 w-3/4 rounded bg-white/10"></div>
              <div className="h-6 w-full rounded bg-white/5"></div>
              <div className="h-6 w-full rounded bg-white/5"></div>
              <div className="bg-brand-purple h-6 w-full rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TemplateCard: React.FC<{ title: string; price: number; image: string; slug: string }> = ({ title, price, image, slug }) => {
  const displayImage = image.startsWith('http') || image.startsWith('/') ? image : `/products/${image}`;
  return (
    <Link href={`/product/${slug}`} className="card-bg group flex h-full cursor-pointer flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-white dark:bg-[#0F0F13]">
        <img
          src={displayImage}
          alt={title}
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between p-5">
        <h3 className="mb-3 line-clamp-2 text-[14px] leading-snug font-medium text-slate-500 transition-colors group-hover:text-slate-800 dark:text-gray-300 dark:group-hover:text-white">
          {title}
        </h3>
        <div className="text-base font-bold tracking-tight text-slate-900 dark:text-white">${price}</div>
      </div>
    </Link>
  );
};

const FeaturedTemplates = async () => {
  const { products } = await getPaginatedProductsWithImages({ take: 4 });

  return (
    <section className="section-bg px-6 py-10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Templates</h2>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <TemplateCard
              key={product.slug}
              slug={product.slug}
              title={product.title}
              price={product.price_usd}
              image={product.images[0] || 'placeholder.jpg'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default async function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0F0F13]">
      <TopMenu />
      <Hero />
      <FeaturedTemplates />
      <Footer />
    </div>
  );
}
