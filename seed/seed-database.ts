import prisma from '../lib/prisma';
import { initialData } from './seed';
import fs from 'fs';
import path from 'path';

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { products: seedProducts, categories, users } = initialData;

  // // 1. Crear Usuarios
  // await prisma.user.createMany({
  //   data: users,
  // });

  // 2. Crear Categorías
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

  // 3. Productos dinámicos desde directorios
  const productsDir = path.join(process.cwd(), 'public', 'products');
  const productFolders = fs.readdirSync(productsDir).filter((folder) => {
    return folder !== '.DS_Store' && fs.statSync(path.join(productsDir, folder)).isDirectory();
  });

  for (const folderName of productFolders) {
    // Buscar metadata en el seed o usar defaults
    const seedProduct = seedProducts.find((p) => p.title === folderName);

    const title = folderName;
    const slug = title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');

    let frameworkArray = ['react'];
    if (title.toLowerCase().includes('nextjs')) frameworkArray = ['react', 'nextjs'];
    else if (title.toLowerCase().includes('astro')) frameworkArray = ['astro'];

    frameworkArray = seedProduct?.framework || frameworkArray;

    const categoryKey = seedProduct?.category || 'dashboards';

    // Leer imagenes del directorio exacto local
    const folderPath = path.join(productsDir, folderName);
    const imageFiles = fs.readdirSync(folderPath).filter((file) => {
      return file.match(/\.(png|jpe?g|webp|gif|svg)$/i);
    });

    // Guardaremos el path que espera nuestro componente: `/products/${folderName}/${file}` ya lo hacemos dinámicamente en UI
    // Así que guardaremos sólamente `NombreCarpeta/nombre_imagen.png` para mantener URLs limpias.
    const imagePaths = imageFiles.map((file) => `${folderName}/${file}`);

    const dbProduct = await prisma.product.create({
      data: {
        title: title,
        slug: seedProduct?.slug || slug,
        description: seedProduct?.description || `Description for ${title}`,
        price_usd: seedProduct?.price_usd || 0,
        file_url: seedProduct?.file_url || '',
        downloads: seedProduct?.downloads || 0,
        categoryId: categoriesMap[categoryKey],
        tags: {
          set: seedProduct?.tags || frameworkArray,
        },
        images: {
          set: imagePaths,
        },
      },
    });

    const imagesData = imagePaths.map((url) => ({
      url,
      productId: dbProduct.id,
    }));

    if (imagesData.length > 0) {
      await prisma.productImage.createMany({
        data: imagesData,
      });
    }
  }

  console.log('Seed ejecutado correctamente con lectura dinámica de imágenes.');
}

main();
