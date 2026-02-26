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
    // 1. Limpiar nombre de carpeta físicamente
    const safeFolderName = folderName
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');

    const oldFolderPath = path.join(productsDir, folderName);
    const newFolderPath = path.join(productsDir, safeFolderName);

    if (folderName !== safeFolderName) {
      if (fs.existsSync(newFolderPath)) {
        // Si ya existe la carpeta destino, movemos los archivos y borramos la vieja
        const filesToMove = fs.readdirSync(oldFolderPath);
        filesToMove.forEach((f) => {
          fs.renameSync(path.join(oldFolderPath, f), path.join(newFolderPath, f));
        });
        fs.rmdirSync(oldFolderPath);
      } else {
        fs.renameSync(oldFolderPath, newFolderPath);
      }
    }

    const currentFolderName = safeFolderName;
    const currentFolderPath = newFolderPath;

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

    // 2. Leer y limpiar nombres de archivos
    const imageFiles = fs.readdirSync(currentFolderPath).filter((file) => {
      return file.match(/\.(png|jpe?g|webp|gif|svg)$/i);
    });

    const imagePaths = imageFiles.map((file) => {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const safeFileName =
        name
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '') + ext;

      if (file !== safeFileName) {
        fs.renameSync(path.join(currentFolderPath, file), path.join(currentFolderPath, safeFileName));
      }
      return `${currentFolderName}/${safeFileName}`;
    });

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
