'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { searchProducts } from '@/actions/product/search-products';
import Image from 'next/image';
import { useDebounce } from '@/hooks';
import { Search } from 'lucide-react';
import { titleFont } from '@/config/fonts';
import { Button } from '@/components/ui/button';

interface ProductSearchResult {
  id: string;
  title: string;
  slug: string;
  priceConfig: number;
  category: string;
  image: string;
}

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<ProductSearchResult[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const debouncedQuery = useDebounce(query, 300);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  React.useEffect(() => {
    const fetchResults = async () => {
      if (debouncedQuery.length > 2) {
        setIsLoading(true);
        try {
          const fetchedResults = await searchProducts(debouncedQuery);
          setResults(fetchedResults);
        } catch (error) {
          console.error('Failed to search products', error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    fetchResults();
  }, [debouncedQuery]);

  const handleSelect = (slug: string) => {
    setOpen(false);
    router.push(`/shop/product/${slug}`);
  };

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setOpen(true)}
        className="mx-2 flex items-center justify-center rounded-md p-2 ring-1 ring-gray-200 transition-all hover:scale-105 hover:bg-gray-100 active:scale-95 dark:ring-gray-800 dark:hover:bg-gray-800"
        aria-label="Search products"
      >
        <Search className="h-5 w-5" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search products..." value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>{isLoading ? 'Searching...' : 'No results found.'}</CommandEmpty>

          {results.length > 0 && (
            <CommandGroup heading="Products">
              {results.map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.title}
                  onSelect={() => handleSelect(product.slug)}
                  className="flex cursor-pointer items-center justify-between gap-4 py-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-20 overflow-hidden rounded-md border shadow-sm">
                      <Image src={product.image} alt={product.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">{product.title}</span>
                      <span className="text-muted-foreground text-xs capitalize">{product.category}</span>
                    </div>
                  </div>
                  <span className={`${titleFont.className} font-bold text-blue-600 dark:text-blue-400`}>${product.priceConfig}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
