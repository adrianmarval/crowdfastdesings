# Crowdfast Designs

Crowdfast Designs es una plataforma moderna de comercio electrónico (e-commerce) orientada a la venta de productos digitales como plantillas web, dashboards, UI Kits y componentes. Está construida usando tecnologías de vanguardia como **Next.js 16**, **React 19**, y está respaldada por una base de datos **PostgreSQL** mediante **Prisma ORM**.

La aplicación proporciona un robusto ecosistema con autenticación a través de **Better Auth**, gestión de correos con **Resend**, pasarela de pagos integrada de **PayPal**, y diseño modular con **Tailwind CSS** y **Radix UI**.

## 🚀 Características Principales

- 🛒 **E-commerce de productos digitales**: Orientado nativamente a la venta de código y diseño.
- 🔐 **Autenticación sólida**: Gestión de sesiones, login y administradores con _Better Auth_.
- 📦 **PostgreSQL + Prisma**: Estructura de BD estricta y tipada (`Category`, `Order`, `Product`, etc.).
- 💳 **Integración PayPal**: Pagos integrados listos para manejar transacciones sin dolor de cabeza.
- 📧 **Resend**: Envíos de correos transaccionales rápidos.
- 🎨 **UI y Animaciones**: Interfaz construida con Radix UI, Tailwind CSS v4, e integraciones de movimiento como framer-motion / swiper.
- 🚦 **Gestión de estado global**: Implementado del lado del cliente utilizando _Zustand_.
- 🌱 **Multi-Seed Dinámico**: Lógica generativa avanzada para importar datos de productos e imágenes escaneando directorios locales automáticamente.

---

## 📋 Requisitos Previos

- Node.js (v18 o superior recomendado)
- Docker y Docker Compose (para correr la base de datos en local fácilmente)
- Cuentas de API o Sandbox de [PayPal](https://developer.paypal.com/) y [Resend](https://resend.com/)

---

## 🛠 Instalación y Configuración Local

### 1. Clonar el repositorio y bajar dependencias

```bash
npm install
```

### 2. Base de Datos con Docker Compose

El proyecto incluye un archivo `docker-compose.yml` preconfigurado para levantar PostgreSQL rápidamente y persistir la data en el repo (sin mezclarla con tu propia instalación local).
Levanta el contenedor en segundo plano con:

```bash
docker-compose up -d
```

Esto inicializará una instancia en el puerto `5432` y utilizará las credenciales especificadas en tus variables de entorno.

### 3. Variables de Entorno

Debes crear tu propio archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

A continuación, se documenta la sintaxis y cómo obtener o establecer cada una de las variables requeridas en `.env.example`:

#### Base de Datos (PostgreSQL)

- **`DB_USER`** (Ej. `postgres`): El usuario de la base de datos.
- **`DB_NAME`** (Ej. `crowdfastdesigns`): El nombre de tu base de datos principal.
- **`DB_PASSWORD`** (Ej. `123456`): Contraseña asignada al usuario.
- **`DATABASE_URL`** (Ej. `postgresql://postgres:123456@localhost:5432/crowdfastdesigns?schema=public`): La URL de conexión requerida por Prisma ORM.

#### Aplicación (App)

- **`NEXT_PUBLIC_APP_URL`** (Ej. `http://localhost:3000`): La URL pública principal de la app para que los componentes front-end envíen correos y hagan redurecciones correctas.

#### Autenticación (Better Auth)

- **`BETTER_AUTH_SECRET`**: Clave secreta utilizada para cifrar/firmar tokens y cookies de las sesiones de usuario. Genera una ejecutando en la terminal: `npx @better-auth/cli generate secret` o `openssl rand -base64 32`.
- **`BETTER_AUTH_URL`** (Ej. `http://localhost:3000`): La URL base de tu aplicación, necesaria para resoluciones correctas con Better Auth.

#### Correos Transaccionales (Resend)

- **`RESEND_API_KEY`**: El token para integrarte a Resend y enviar correos transaccionales (recibos, confirmaciones). Obtenlo desde [Resend.com](https://resend.com/api-keys).

#### Pasarela de Pago (PayPal)

- **`NEXT_PUBLIC_PAYPAL_CLIENT_ID`**: Clave pública para visualizar el botón de pago en el front-end. Obtenla desde [PayPal Developer](https://developer.paypal.com/dashboard/applications).
- **`PAYPAL_SECRET`**: Llave privada utilizada exclusivamente por el servidor para verificar pagos.
- **`PAYPAL_OAUTH_URL`** y **`PAYPAL_ORDERS_URL`**: Por defecto configuradas para _Sandbox_. Para migrar a entorno real (producción), reemplaza `api-m.sandbox` por `api-m` y `api.sandbox` por `api`.

#### Backend y Almacenamiento (Appwrite Cloud / Local)

Las variables _públicas_ exponen endpoints o ID de proyecto y pueden leerse desde los componentes web.

- **`NEXT_PUBLIC_APPWRITE_PROJECT_ID`**: ID único de tu proyecto (Settings > Project ID).
- **`NEXT_PUBLIC_APPWRITE_PROJECT_NAME`**: Nombre de tu proyecto.
- **`NEXT_PUBLIC_APPWRITE_ENDPOINT`** (Ej. `https://cloud.appwrite.io/v1`): Servidor base a conectar.
- **`NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET`**: ID del Bucket (Storage) empleado para guardar las imágenes visibles de los productos digitales (debe tener lectura pública).

Las variables _privadas_ son críticas para permitir Server Actions (para no dejar expuestos archivos internos).

- **`APPWRITE_ZIPS_BUCKET`**: El bucket privado de Storage donde se alojan los archivos comprimidos interactivos a descargar tras el pago. Sus permisos nunca deben estar en abierto.
- **`APPWRITE_API_KEY`**: Llave API generada con acceso a Databes y Storage para que el servidor pueda manipular archivos sin ser bloqueado. (Overview > Integrations > API Keys).

### 4. Generar e Inicializar Data Inicial (A través del Seed)

Una vez que `DATABASE_URL` esté correctamente insertado en el archivo `.env` y el Docker corriendo, migramos la estructura a la Base de Datos utilizando Prisma:

```bash
# Envía tu modelo schema a postgres (Cuidado: esto fuerza los cambios del esquema si la DB estuviese usada)
npx prisma db push

# ¡Ejecutamos el Seed Interactivo!
npx tsx seed/seed-database.ts
```

#### 🌿 ¿Qué hace el Seed Automático (`seed-database.ts`)?

La lógica implementada es altamente inteligente y evita la inserción manual pesada de cada producto de tienda.

1. Inicializa y vacía por completo las antiguas tablas en prevención de duplicados (Productos, Imágenes, Categorías).
2. Trae metadatos predeterminados desde `seed.ts` (Donde se exponen usuarios y modelos por defecto).
3. **Escanea los directorios dinámicamente** en `public/products`: Para cada carpeta detectada, autogenerará un producto correlacionado cruzando variables por nombre.
4. **Detecta imágenes iterativamente**: Cada foto, PNG, SVG o JPEG presente será validado y anclado a las fotografías promocionales sin necesidad de declararlas de una en una.

### 5. Iniciar la Ejecución Local

Como el ecosistema depende de Next app router conviviendo con servidores Node.js dedicados (Notar `server.js` habilitando integraciones de de Socket.io u otras librerías personalizadas subyacentes), puedes arrancar la app digitando:

```bash
npm run dev
```

🎉 **Accede al entorno de desarrollo tu navegador en:** `http://localhost:3000`
