export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  price_usd: number;
  url_live_preview: string | null;
  file_url: string;
  version: string | null;
  downloads: number;
  rating: number | null;
  images: string[];
  tags: string[];
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price_usd: number;
  image: string;
}

export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}
