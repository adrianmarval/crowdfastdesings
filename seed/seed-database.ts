import prisma from '../lib/prisma';
import { initialData } from './seed';
import { countries } from './seed-countries';
import { Client, Storage, Query } from 'node-appwrite';

// ── Appwrite setup for listing images ───────────────────────────────────
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')
  .setKey(process.env.APPWRITE_API_KEY || '');

const storage = new Storage(client);
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET || '';
const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '';
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '';

function buildAppwriteViewUrl(fileId: string): string {
  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
}

/**
 * Fetches ALL files from the Appwrite bucket (paginated).
 * Returns a Map: slug → array of Appwrite view URLs.
 *
 * Files are named with convention: "slug--filename.webp"
 */
async function loadAllAppwriteImages(): Promise<Map<string, string[]>> {
  const imagesBySlug = new Map<string, string[]>();
  let offset = 0;
  const limit = 100;
  let totalFiles = 0;

  console.log('🔍 Loading all images from Appwrite bucket...');

  while (true) {
    const response = await storage.listFiles(BUCKET_ID, [Query.limit(limit), Query.offset(offset)]);

    for (const file of response.files) {
      // Extract slug from naming convention: "slug--filename.webp"
      const separatorIndex = file.name.indexOf('--');
      if (separatorIndex === -1) continue; // Skip files without our naming convention

      const slug = file.name.substring(0, separatorIndex);
      const url = buildAppwriteViewUrl(file.$id);

      if (!imagesBySlug.has(slug)) {
        imagesBySlug.set(slug, []);
      }
      imagesBySlug.get(slug)!.push(url);
    }

    totalFiles += response.files.length;

    if (response.files.length < limit) break;
    offset += limit;
  }

  console.log(`   ✅ Loaded ${totalFiles} files for ${imagesBySlug.size} products\n`);
  return imagesBySlug;
}

async function main() {
  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.userAddress.deleteMany();
  await prisma.country.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { products: seedProducts, categories } = initialData;

  await prisma.country.createMany({
    data: countries,
  });

  // 1. Crear Categorías
  const categoriesData = categories.map((name) => ({ name }));
  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce(
    (map: Record<string, string>, category: { id: string; name: string }) => {
      map[category.name.toLowerCase()] = category.id;
      return map;
    },
    {} as Record<string, string>,
  );

  // 2. Load all images from Appwrite (one call, no per-product queries)
  const imagesBySlug = await loadAllAppwriteImages();

  // 3. Crear Productos con imágenes desde Appwrite
  for (const seedProduct of seedProducts) {
    const slug = seedProduct.slug;
    const categoryKey = seedProduct.category || 'dashboards';

    const imagePaths = imagesBySlug.get(slug) || [];

    if (imagePaths.length === 0) {
      console.log(`📦 ${seedProduct.title} — ⚠️  no images in Appwrite`);
    } else {
      console.log(`📦 ${seedProduct.title} — ✅ ${imagePaths.length} images`);
    }

    const dbProduct = await prisma.product.create({
      data: {
        title: seedProduct.title,
        slug: slug,
        description: seedProduct.description || `Description for ${seedProduct.title}`,
        price_usd: seedProduct.price_usd || 0,
        file_url: seedProduct.file_url || '',
        downloads: seedProduct.downloads || 0,
        categoryId: categoriesMap[categoryKey],
        tags: {
          set: seedProduct.tags || ['react'],
        },
        images: {
          set: imagePaths,
        },
      },
    });

    if (imagePaths.length > 0) {
      await prisma.productImage.createMany({
        data: imagePaths.map((url) => ({
          url,
          productId: dbProduct.id,
        })),
      });
    }
  }

  console.log('\n✅ Seed ejecutado correctamente con imágenes desde Appwrite.');
}

main();
