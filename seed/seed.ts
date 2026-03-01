import bcryptjs from 'bcryptjs';

type Framework = 'react' | 'nextjs' | 'vue' | 'svelte' | 'angular' | 'solidjs' | 'remix' | 'astro' | 'qwik' | 'sveltekit';
type Category = 'dashboards' | 'ecommerce' | 'landing-pages' | 'ui-kits' | 'saas' | 'portfolio';

interface SeedProduct {
  title: string;
  slug: string;
  description?: string;
  price_usd: number;
  url_live_preview?: string;
  file_url: string;
  framework: Framework[];
  version?: string;
  downloads: number;
  images: string[];
  tags: string[];
  category: Category;
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
  id: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'adrianmarval@gmail.com',
      name: 'Adrian Marval',
      password: bcryptjs.hashSync('123456'),
      role: 'admin',
      id: '1',
      emailVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'solmairamaza@gmail.com',
      name: 'Solmaira Maza',
      password: bcryptjs.hashSync('123456'),
      role: 'user',
      id: '2',
      emailVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],

  categories: ['dashboards', 'ecommerce', 'landing-pages', 'ui-kits', 'saas', 'portfolio'],
  products: [
    {
      title: 'Analytics Insights Dashboard',
      slug: 'analytics-insights-dashboard',
      description: `# Analytics Insights Dashboard - SaaS UI Template

**The ultimate solution for high-end administrative dashboards.**

Analytics Insights Dashboard is a premium frontend template designed for founders and developers who don't settle for the generic. Built with a modular architecture in **Vite + React**, this template offers an enterprise-level visual experience with the refinement of an artisanal product.

## 🎨 Cutting-Edge Design and UI

Analytics Insights Dashboard has been designed to captivate. It's not just a set of widgets; it's a coherent visual ecosystem:

- **Subtle "Glassmorphism" Aesthetic**: Use of modern transparencies and gradients that elevate the perceived quality of the product.
- **Flawless Dark Mode**: A dark color scheme designed from scratch (not just inverted) for maximum readability and comfort.
- **High-Precision Charts**: Seamless integration with Recharts, offering revenue visualizations and user metrics with smooth animations.
- **Boutique Quality Components**: Buttons, tables, and menus with micro-interactions that enhance user retention.

## ⚡ Modern Technical Stack

Developed for speed and scalability, Analytics Insights Dashboard uses the tools preferred by the most demanding developers:

- **Vite & React 19**: The current standard for high-performance web applications.
- **Tailwind CSS**: Utility-based styling that allows for branding changes in seconds.
- **Clean Component Architecture**: Organized code, typed with TypeScript, and easily extensible.
- **Zero Heavy Dependencies**: Keep your bundle light and your application fast.

## 📦 What's included in the package?

The template comes loaded with critical views for any modern SaaS:

- **Commercial Landing Page**: Featuring sections for features, pricing, and an impactful hero.
- **Access Portal**: Login and Registration screens designed to convert.
- **Control Dashboard**: Overview with key metrics (MRR, ARR, Churn) and growth charts.
- **Analytics Center**: Deep breakdown of acquisition, conversion funnels, and retention.
- **Customer & Team Management**: Interactive tables to manage users and roles.
- **Administrative Infrastructure**: Billing, Security, Settings, and System Activity views.
- **Resource Center**: Pre-designed Documentation and Integrations section.

## 🚀 Ready for your Logic

Analytics Insights Dashboard handles 100% of the heavy UI/UX work for you. The code is structured so you can connect your database or API in a matter of minutes. It's the perfect foundation for projects that demand a professional finish without sacrificing months of development.

**Elevate your application's standard today with Analytics Insights Dashboard.**
`,
      price_usd: 49,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.27.22 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.27.28 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.27.33 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.27.43 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.27.53 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.28.00 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.28.06 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.28.14 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.28.23 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.28.32 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.28.40 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.28.49 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.29.24 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.29.30 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.29.52 PM.png',
        '/products/Analytics%20Insights%20Dashboard/Screenshot 2026-01-22 at 7.30.16 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Argon Dashboard Chakra PRO',
      slug: 'argon-dashboard-chakra-pro',
      description: `# Argon Dashboard Chakra Pro

A production-ready premium frontend template built with **Vite** and **React**. Accelerate the development of your next project, CRM, or admin panel with this solid and elegant foundation.

## 🎨 Design and UI

This template has been designed with an artisanal focus on visual details and user experience:

- **Tailwind CSS v4**: All styling is built on Tailwind and modern utilities for optimal performance and easy customization.
- **Component Quality**: Each UI element is carefully structured to offer top-tier design consistency.
- **Fully Responsive**: Adaptable to any screen size, from mobile devices to desktop monitors.
- **Fluid Animations**: Elegant transitions powered by the Motion library (Framer Motion) for a premium feel.

## ⚡ Technical Stack

- **Framework**: Vite + React 19
- **Routing**: React Router v7
- **Styles**: Tailwind CSS v4
- **Iconography**: Lucide React
- **Charts**: Recharts for data visualization.

## 📦 What's included?

This template comes with over 40 pages ready to use and customize, covering the most common user flows:

- **Dashboards & Reports**: Main Dashboard, Detailed Reports, Analytics (Charts).
- **Internal Applications**: Kanban board, Interactive Calendar, Step Wizard, Data Tables.
- **E-commerce**: Order List, Order Details, New Product, Edit Product, Product Page.
- **Management & CRM**: User Profile, Teams, Projects (All, General, Timeline), Billing (Invoice, Billing), Pricing.
- **Authentication (Multiple variants: Basic, Cover, Illustration)**:
  - Sign In
  - Sign Up
  - Reset Password
  - Lock Screen
  - Two-Step Verification
- **Settings**: Account Settings, Alerts, Widgets, RTL Support.

## Ready for your business logic

This project is built as a clean and organized frontend foundation. **It does not impose restrictions on your backend architecture**. The code is ready for the buyer to easily integrate with any REST API, GraphQL, or Backend-as-a-Service platform (Supabase, Firebase, Node.js, Laravel, Django, etc.), giving you total freedom to add your own business logic, authentication, and databases.
`,
      price_usd: 199,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.22.45 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.22.50 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.22.55 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.22.59 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.04 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.09 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.13 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.18 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.22 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.27 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.32 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.36 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.40 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.45 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.50 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.23.55 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.02 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.07 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.12 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.17 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.22 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.27 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.32 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.47 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.52 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.24.58 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.25.01 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.25.07 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.25.18 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.25.22 PM.png',
        '/products/Argon%20Dashboard%20Chakra%20PRO/Screenshot 2026-02-25 at 1.25.31 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Argon Dashboard PRO Material-UI-V4',
      slug: 'argon-dashboard-pro-material-ui-v4',
      description: `# argon-dashboard-pro-material-ui-v4 - React UI Template

Welcome to **argon-dashboard-pro-material-ui-v4**, a premium enterprise-grade frontend template, production-ready and fully optimized with **Vite**. Meticulously designed for developers looking to launch high-quality web products in record time, without compromising on style or interface scalability.

## 🎨 Design and UI

Our template has been polished to create a spectacular first impression. The absolute focus of the project is the quality of the visual interface:

- **Comprehensive Tailwind CSS:** Fully designed using Tailwind CSS's utility engine, allowing absolute graphical adaptation to your brand needs.
- **Native Dark Mode:** Elegant and flawless integration of light and dark visual themes, drastically improving user experience and retention.
- **Fully Responsive:** From ultrawide monitors to mobile devices, every grid and table has been built for fluid adaptation.
- **Premium Animations:** Subtle micro-interactions implemented with Framer Motion that give the interface a modern, live, and tactile feel.

## ⚡ Technical Stack

This template uses a modern frontend architecture, robust and in-demand by the industry today:

- **Main Framework:** React 19 + Vite (Offers almost instantaneous load times and Hot Module Replacement).
- **Language:** Strict TypeScript for end-to-end type-safety.
- **Styling:** Tailwind CSS v4 with clsx and tailwind-merge utilities for smart class management.
- **Visual Components:** Professional iconography with lucide-react and interactive data charts structured with recharts.
- **Routing:** Smooth navigation and native SPA powered by react-router-dom.

## 📦 What's included?

This is an extensive design template. With your download, you get immediate access to the source code for the following views and modular pieces ready to connect to real data:

**Specialized Dashboards:**

- Main / Default Dashboard
- Smart Home Dashboard
- Automotive Dashboard
- CRM Dashboard

**Embedded Application Pages:**

- Orders
- Product Integration
- User Management
- Calendar
- Kanban Board
- Wizard Workflow
- Projects

**Identity and Authentication Pages:**

- Profile Page
- Account Settings
- Sign In
- Sign Up

**Internal UI Library and Components:**
Additionally, you will receive a complete catalog (Components Page) and reusable design blocks:

- Global Top Header
- Dynamic Side Navigation (Sidebar)
- High-Impact Stats Cards
- Attractive Sales Charts (Sales Chart, Sales by Country)

---

### A Clean and Flexible Canvas

We understand developers. **argon-dashboard-pro-material-ui-v4** is a strictly frontend-oriented template. Its code is beautifully documented, clean, and structured. **We don't force you to use local databases, ORMs, or authentication platforms you didn't ask for**. You have total freedom and sovereignty over how and where you connect your own backend logic. Accelerate your layout work and elevate the beauty of your views with a flawless visual foundation.
`,
      price_usd: 49,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.20.47 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.20.54 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.20.58 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.03 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.08 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.13 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.24 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.29 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.35 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.40 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.49 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.53 PM.png',
        '/products/Argon%20Dashboard%20PRO%20Material-UI%20V4/Screenshot 2026-02-25 at 1.21.57 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Argon Dashboard React',
      slug: 'argon-dashboard-react',
      description: `# Argon Dashboard React - React 19 & Tailwind CSS 4 Premium Template

Elevate your projects with **Argon Dashboard React**, an elite admin template designed to offer an exceptional user experience and unmatched development speed. Meticulously built using the most modern stack: **Vite**, **React 19**, and **Tailwind CSS 4**.

This template is not just a set of files; it's an artisanal frontend architecture, optimized for performance and scalability, ready to be the core of your next SaaS application, CRM, or corporate dashboard.

## 🎨 Design and UI

Our design philosophy centers on clarity, order, and premium aesthetics.

- **Tailwind CSS 4:** We harness the power of the latest Tailwind version for an atomic and efficient design system.
- **Micro-interactions:** Smooth and fluid animations powered by **Motion (Framer Motion)** that enhance the tactile and responsive feel of the site.
- **Fully Responsive:** A smart grid that adapts perfectly to mobile, tablet, and desktop devices.
- **High-Fidelity Components:** From elegant cards to advanced tables and validated forms, every element has been visually polished.

## ⚡ Technical Stack

We have selected the fastest and most stable technologies in today's ecosystem:

- **Framework:** [Vite] - Forget about slow load times; enjoy instant HMR and ultralight builds.
- **Logic:** [React 19] - The industry standard, implemented with modern hooks and composition patterns.
- **Iconography:** [Lucide React] - A consistent, lightweight, and aesthetically flawless icon library.
- **Visualization:** [Recharts] - Interactive and customizable charts to transform complex data into clear visual information.
- **Architecture:** Modular and clean structure, designed for long-term maintainability.

## 📦 What's included?

The template comes loaded with everything you need to start producing from day one:

- **Main Dashboard:** Overview with statistics, sales charts, and performance metrics.
- **User Profile:** Sophisticated design for personal data management and settings.
- **Advanced Tables:** Organized layouts to visualize large volumes of data with clarity.
- **Authentication Views:** Login and Registration pages ready to integrate with your favorite provider.
- **Icon Explorer:** A fluid integration to preview and use the system iconography.
- **Maps Section:** Clean integration for geographical visualization.
- **Sidebar & Navbar:** Smart and collapsible navigation systems for better ergonomics.

## Conclusion

**Argon Dashboard React** is the ideal investment for developers and companies who don't want to waste time on the technical foundation and initial design. The code is strictly organized, commented, and free of unnecessary backend logic, allowing you to inject your own API, database, and business logic in minutes.

**Save hundreds of hours of design and frontend development with a solution that simply works and looks amazing.**
`,
      price_usd: 0,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Argon%20Dashboard%20React/Screenshot 2026-02-25 at 1.11.33 PM.png',
        '/products/Argon%20Dashboard%20React/Screenshot 2026-02-25 at 1.11.55 PM.png',
        '/products/Argon%20Dashboard%20React/Screenshot 2026-02-25 at 1.12.04 PM.png',
        '/products/Argon%20Dashboard%20React/Screenshot 2026-02-25 at 1.12.11 PM.png',
        '/products/Argon%20Dashboard%20React/Screenshot 2026-02-25 at 1.12.15 PM.png',
        '/products/Argon%20Dashboard%20React/Screenshot 2026-02-25 at 1.12.22 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'AstroLaunch UI Pro',
      slug: 'astrolaunch-ui-pro',
      description: `# Astro Launch UI Pro

A premium, production-ready frontend template focused on **Vite and React**, designed to provide a clean, fast, and top-tier development experience.

## 🎨 Design and UI

Our template stands out for its exquisite care in visual aesthetics and user experience:

- **Component Quality:** Superior artisanal designs with meticulous attention to detail.
- **Tailwind CSS:** Built using the best modern utilities for flawless styling.
- **Premium Animations:** Impactful and subtle micro-interactions and transitions powered by Framer Motion.
- **100% Responsive:** Pixel-perfect adaptation from mobile devices to desktop screens.

## ⚡ Technical Stack

- **Framework:** Vite + React (Extremely fast and ideal for SPAs).
- **Styles:** Tailwind CSS v4.
- **Iconography:** Lucide React.
- **Routing and Motion:** React Router DOM and Framer Motion.

## 📦 What's included?

Astro Launch UI Pro comes with a complete structure of preconfigured views and reusable UI components:

- **Included Pages:**
  - ✨ Landing Page (Conversion-oriented landing page).
  - 📊 Dashboard (Control panel with an analytical and intuitive design).
  - 💳 Pricing (Clear pricing table, highlighting the best membership).
  - 🔒 Authentication (Carefully crafted Sign In and Sign Up pages).
  - 📝 About & Contact (Informative pages with polished form layouts).

- **Reusable Components:**
  - Global layout and base containers.
  - Responsive navigation Navbar.
  - Structured Footer.
  - Fully customizable base elements (form inputs, buttons).

---

_Launch UI Pro delivers rigorously organized and completely clean code. We've laid the visual and structural foundations so you can immediately focus on your great strength: adding your own business logic and connecting the magic of your preferred backend._
`,
      price_usd: 49,
      file_url: '',
      framework: ['astro'],
      downloads: 0,
      images: [
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.14.42 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.14.48 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.14.57 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.15.02 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.15.08 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.15.12 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.15.16 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.15.19 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.15.28 PM.png',
        '/products/AstroLaunch%20UI%20Pro/Screenshot 2026-02-25 at 3.15.32 PM.png',
      ],
      tags: ['astro'],
      category: 'landing-pages',
    },
    {
      title: 'Black Dashboard PRO React',
      slug: 'black-dashboard-pro-react',
      description: `# Black Dashboard PRO React

Transform your next project with **Black Dashboard PRO React**! This is a production-ready premium template, strictly designed with **Vite**, **React**, and **Tailwind CSS**.

## 🎨 Design and UI

Focused on stunning and functional design:

- **Tailwind CSS:** Modern, fully configurable styles for easy customization.
- **Premium Visual Quality:** Unrivaled dark aesthetics (native Dark Mode) with professional finishes.
- **100% Responsive:** Fluid and perfect adaptability on any device (mobile, tablet, desktop).
- **Artisanal Components:** Polished interfaces using _Lucide React_ for iconography and _Framer Motion_ for dynamic micro-animations that enhance user experience.

## ⚡ Technical Stack

Speed is the pillar of this template:

- **Bundler:** Vite (ultra-fast development experience).
- **Front-end Library:** React v19.
- **Routing:** React Router DOM.
- **Charts and Interfaces:** Recharts for advanced metrics visualization.
- **Styling:** Tailwind CSS v4 with clean utility base (clsx, tailwind-merge).

## 📦 What's included?

Enjoy dozens of reusable components and multiple views designed to accelerate your development. The detected collection includes:

**Key Pages:**

- 📊 **Dashboard:** Integrated control panel.
- 👤 **User Profile:** Clean user profiles.
- 💳 **Pricing:** Structured pricing tables.
- 📅 **Calendar & Timeline:** Interactive temporal views.
- 🔐 **Auth Pages:** Login/registration flows (UI views, ready for you to bring to life).
- 🌍 **RTL Support:** Native right-to-left language support.

**Ready-to-Use Components:**

- 📝 **Robust Forms:** Regular, Extended, Integrated Validation, and Wizards (step-by-step flows).
- 🗂️ **Data Tables:** Simple, Extended, and complex ReactTables.
- 📍 **Interactive Maps**.
- ⚙️ **Modular Elements:** Buttons, Panels, Grid System, strict Typography, and interactive Widgets.
- 🛎️ **Notifications and Alerts:** Native floating elements and SweetAlert.

> **Note for Developers:** The code is delivered structured, extremely clean, and free of invasive server logic. It is prepared and waiting for you to integrate your own APIs, Databases, or Authentication systems onto this unrivaled presentation base. Sell fast, develop even faster.
`,
      price_usd: 19,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.00 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.05 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.11 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.16 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.24 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.33 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.39 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.44 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.25.48 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.02 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.10 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.15 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.20 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.25 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.29 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.34 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.38 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.44 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.48 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.26.53 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.27.00 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.27.12 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.27.16 PM.png',
        '/products/Black%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.27.21 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'CRM Web App',
      slug: 'crm-web-app',
      description: `# CRM Web App - Premium Dashboard & Sales UI Template

CRM Web App is a professional-grade web design template, meticulously crafted for customer relationship management (CRM) applications and business dashboards. Developed with a "frontend-first" focus, it offers a stunning visual foundation and clean component architecture to accelerate your development.

## 🎨 Design and UI

Our template stands out for a minimalist and modern aesthetic that prioritizes usability without sacrificing style:

- **Native Tailwind CSS**: Fully styled with Tailwind CSS for seamless and complete customization.
- **High-Fidelity Components**: From dynamic KPIs to interactive activity lists, every element has been artisanally designed.
- **Flawless Dark Mode**: Native dark mode support with a balanced color palette that reduces eye fatigue.
- **Fully Responsive**: A fluid experience on any device, from ultra-wide monitors to smartphones.
- **Typography and Visuals**: Use of the Manrope font for superior legibility and Material Symbols for consistent iconography.

## ⚡ Technical Stack

CRM Web App uses the most efficient and modern technologies in the current frontend ecosystem:

- **Vite 6**: Ultra-fast development performance and optimized builds.
- **React 19**: Leverage the latest capabilities of the most popular UI library.
- **Recharts**: Powerful and elegant data visualizations integrated directly.
- **React Router 7**: Robust and scalable navigation management.
- **Zero-Tooling Config**: Optimized configuration via CDN and ESM to avoid unnecessary dependency overhead.

## 📦 What's included?

The template comes loaded with all the critical interfaces a real CRM system needs:

- **Main Dashboard**: General screen with visual analytics (Recharts), KPIs, and recent activity feed.
- **Sales Pipeline**: Clear visualization of the flow of deals and opportunities.
- **Lead Management**: Organized interface for prospect tracking.
- **Activity Center**: Daily task system with filtering by type and priority.
- **Profile Management**: Layout for account settings and user details.
- **Full Authentication Flow**:
  - Login Landing
  - Password Recovery (Forgot/Reset Password)
  - Account Verification
  - 2FA Setup (Two-step security)

## 🚀 Production Ready

CRM Web App is not just a design; it's clean and organized code following React best practices. Logic is separated into modular components and well-defined pages, allowing developers to integrate their own backend, database (such as Prisma or Supabase), and authentication systems in hours.

**Sell the best visual experience. Save weeks of design and layout work.**
`,
      price_usd: 29,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.18.02 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.18.30 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.18.41 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.18.48 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.18.53 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.19.00 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.19.20 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.19.26 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.19.31 PM.png',
        '/products/CRM%20Web%20App/Screenshot 2026-01-22 at 8.19.37 PM.png',
      ],
      tags: ['react'],
      category: 'saas',
    },
    {
      title: 'Community Forum Platform',
      slug: 'community-forum-platform',
      description: `# Community Forum Platform: Premium React UI Kit for Community Platforms

Community Forum Platform is a high-fidelity web template designed specifically for developers looking to build community platforms, forums, or social networks with an elite aesthetic. Don't waste time designing from scratch; Community Forum Platform delivers a professional, optimized visual foundation ready to integrate with any backend.

## 🚀 Value Proposition

- **Pixel-Perfect Grade Design:** A sophisticated interface with glassmorphism effects and premium typography that will make your project stand out instantly.
- **Accelerate your Development:** Save over 200 hours of design and layout work. Receive a logical and modular component structure.
- **Fully Customizable:** Built on Tailwind CSS, allowing for global changes to branding, colors, and fonts in seconds.
- **Robust TypeScript Base:** Strict typing for error-free development and smooth integration with your services.

## ⚡ Technical Stack

Community Forum Platform uses the most efficient tools on the market to ensure an ultra-fast development environment:

- **React 19:** The latest version of the leading library, ensuring compatibility and future-proofing.
- **Vite:** The fastest build tool for an instant development experience.
- **Tailwind CSS:** Modern, maintainable styling optimized for performance.
- **React Router v7:** Seamless navigation management ready for large-scale applications.

## ✨ Included Components and Pages

✔️ **Home Experience:** Dynamic hero section and category discovery.
✔️ **Discussion Feed:** Layouts optimized for reading and engagement.
✔️ **Authentication UI:** Login and Verification screens ready to integrate.
✔️ **User Profiles:** Detailed designs for bio, activity, and settings.
✔️ **Messaging & Chat:** Interface for direct communication between users.
✔️ **Moderation & Staff:** Administrative views for content management.
✔️ **Native Dark Mode:** Flawless theme switch across the entire interface.

---

### **Take your project to the next level today.**

Community Forum Platform is a smart investment for those who value visual quality and speed of execution. Let your users enjoy a premium experience while you focus on the business logic.
`,
      price_usd: 149,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.00 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.09 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.24 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.30 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.36 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.41 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.47 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.52 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.57.58 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.58.17 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.59.04 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 7.59.50 PM.png',
        '/products/Community%20Forum%20Platform/Screenshot 2026-01-22 at 8.00.10 PM.png',
      ],
      tags: ['react'],
      category: 'saas',
    },
    {
      title: 'Creator Influencer Platform',
      slug: 'creator-influencer-platform',
      description: `# Creator Influencer Platform: Elite Influencer & Creator Management UI Kit

Elevate your SaaS for creators to the next level! **Creator Influencer Platform** is an ultra-luxury, production-ready frontend template specifically designed for creator economy platforms, influencer management, and high-impact admin panels.

Built entirely on **Vite**, this template offers unmatched performance and a smooth, modern developer experience.

## 🎨 Design and UI: The Aesthetic of Excellence

Creator Influencer Platform stands out with a sophisticated "Dark-First" design that conveys exclusivity and professionalism.

- **Minimalist CreatorVibe Aesthetic**: A carefully selected color palette (Slate & Deep Purple) that focuses attention on the data.
- **Visual Edge**: Extensive implementation of _Glassmorphism_ for cards and menus, achieving a sense of depth and elegance.
- **Native Tailwind CSS**: Styled with Tailwind for seamless and complete customization. All code is clean, semantic, and easy to modify.
- **Seamless Experience**: Refined entrance animations and smooth transitions that guarantee pleasant navigation.
- **100% Responsive**: From ultra-wide monitors to smartphones, the interface adapts with pixel precision.

## ⚡ Technical Stack: Speed and Typing

Designed with the most powerful tools in today's frontend ecosystem to ensure your application is fast and easy to scale.

- **Framework**: [Vite 6](https://vitejs.dev/) + [React 19](https://react.dev/). The winning combination for instant bundling and next-generation reactivity.
- **Robust Typing**: Written entirely in **TypeScript**, guaranteeing self-contained, error-free, and easy-to-document code.
- **Data Visualization**: Full integration with **Recharts** for interactive, lightweight, and highly customizable charts.
- **Iconography and Typography**: Use of Material Symbols and Spline Sans for a modern and readable look.

## 📦 What's included in this Template?

Creator Influencer Platform is not just a landing page; it's a complete ecosystem of views designed to cover all a creator's needs:

1.  **Central Dashboard**: A global view with performance KPIs, trend charts, and real-time recent activities.
2.  **Pro Analytics Module**: Detailed breakdown of growth metrics, engagement rate, and follower demographics.
3.  **Smart Content Library**: Visual asset management with a _Masonry_ style design for photos, videos, and drafts.
4.  **Revenue Manager**: Complete financial panel to monitor monthly earnings (MRR), tips, and pending payments.
5.  **Public Creator Profile**: An elegant and attractive interface for direct interaction with the audience.
6.  **Full Authentication Flow**: A complete suite of screens for Login, Registration, Password Recovery, 2FA, OTP verification, and confirmation.
7.  **Support Pages**: Custom views for 404 (Not Found) and 500 (Server Error).

## 🏆 Your Solid Foundation for Success

Creator Influencer Platform has been developed following frontend architecture best practices. The code is modular, components are reusable, and the structure is ready for you to connect your own backend (Firebase, Supabase, Node.js, etc.) in a matter of hours.

**Sell quality, sell speed, sell Creator Influencer Platform.**
`,
      price_usd: 199,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.02.54 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.03.15 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.03.25 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.03.33 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.03.49 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.04.01 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.15.13 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.15.24 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.15.33 PM.png',
        '/products/Creator%20Influencer%20Platform/Screenshot 2026-01-22 at 8.15.47 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Digital Products Store',
      slug: 'digital-products-store',
      description: `# 🚀 Digital Products Store | Digital Marketplace UI Template

Transform your marketplace vision into reality with **Digital Products Store**, a premium template specifically designed for selling digital products, assets, tools, and design. Built with a "mobile-first" focus and a minimalist, modern aesthetic, this template is the perfect foundation for any developer looking to launch a high-end product quickly.

## 🎨 Design and UI

Digital Products Store offers an immersive visual experience designed to maximize user conversion and retention:

- **Native Tailwind CSS**: Fully styled with Tailwind for total, frictionless customization.
- **Premium Dark Mode**: A curated color palette (Charcoal/Gold/Lime) that conveys professionalism and exclusivity.
- **Glassmorphism Effects**: Navigation and cards with background blur for a modern, clean look.
- **Bento-Style Components**: Modern layouts to showcase featured products and statistics attractively.
- **100% Responsive**: Design optimized for everything from the latest smartphones to ultra-wide monitors.

## ⚡ Technical Stack

Based on the most modern and industry-demanded technologies:

- **Vite**: The fastest bundler for an instant development experience.
- **React 19**: Leverage the latest improvements in the React ecosystem.
- **React Router 7**: Robust routing system ready for scalability.
- **TypeScript**: Strict typing throughout the project (pages, props, data) to prevent production errors.
- **Material Symbols**: Refined and consistent set of icons.

## 📦 What's included?

The template comes equipped with all the essential views for a complete marketplace:

- **Landing Page**: Impactful hero section, featured product grids, feature sections, and CTA.
- **Storefront**: Product catalog with category filters and premium card design.
- **Shopping Cart**: Visual management of selected products ready for state logic integration.
- **Checkout Flow**: Elegant payment process with detailed billing form.
- **User Library**: Personal area for buyers to access their digital downloads.
- **Auth Suite**: Login, Registration, and Password Recovery pages with visual validation.
- **Invoice View**: Professional invoice template ready for print or PDF.
- **Error Center**: Coherently designed 404 and maintenance pages.

## Conclusion

Digital Products Store is not just a set of files; it is the result of artisanal design and clean frontend architecture. The code is strictly organized and modularized, allowing you to add your backend logic (Node.js, Supabase, Firebase, etc.) in a matter of hours.

**Accelerate your development and offer an interface your users will love from the first second.**
`,
      price_usd: 29,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.24.05 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.24.15 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.24.35 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.24.58 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.25.17 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.25.26 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.25.34 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.25.47 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.25.53 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.26.00 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.26.06 PM.png',
        '/products/Digital%20Products%20Store/Screenshot 2026-01-22 at 8.26.14 PM.png',
      ],
      tags: ['react'],
      category: 'ecommerce',
    },
    {
      title: 'Ecommerce General',
      slug: 'ecommerce-general',
      description: `# Ecommerce General - Premium E-commerce React UI Template

**Optimize your workflow with an elite frontend architecture designed for modern e-commerce.**

**Ecommerce General** is a high-fidelity premium template built on the **Vite** ecosystem, designed for developers and agencies looking for a flawless visual foundation, exceptional performance, and a professional code structure. With an aesthetic focus inspired by Nordic minimalism and sustainability, this template transforms the shopping experience into a captivating visual journey.

## 🎨 Next-Level Design and UI

Inspired by the most prestigious interior design brands, this template offers a polished interface geared toward conversion:

- **Native Tailwind CSS:** 100% styled with Tailwind, allowing effortless total customization and an extremely reduced bundle size.
- **Sophisticated Dark Mode:** Full support for light and dark themes with a curated color palette to reduce visual fatigue.
- **Mobile-First Experience:** Each component has been meticulously optimized to offer seamless navigation on mobile devices and tablets.
- **Micro-interactions:** Elegant hover effects, smooth transitions, and loading states designed to delight the end user.

## ⚡ Leading Technical Stack

Built with the tools preferred by senior frontend developers:

- **Vite:** The fastest development environment on the market for an instantaneous experience.
- **React 19:** Leveraging the latest innovations from the world's most popular library.
- **React Router 7:** Robust and optimized SPA (Single Page Application) navigation.
- **TypeScript Typing:** Safe, scalable, and self-documenting code.
- **Modularity:** Decoupled component architecture for maximum reuse.

## 📦 What's included in this template?

**Ecommerce General** offers a complete ecosystem of production-ready views:

- **Main Shop:** Visual filtering system and dynamic product grid.
- **Product Details:** Complete technical sheet with color/size variants and optimized gallery.
- **Checkout Suite:** Intuitive cart experience and payment flow divided into clear steps.
- **Full User Dashboard:** Includes control panel, order history, address management, payment methods, and profile settings.
- **Billing (Invoice UI):** Professional invoice template ready to print.
- **Authentication Flow:** Login, Registration, Password Recovery, and Email Verification pages.
- **Global Context:** Shopping cart logic efficiently implemented via React Context API.

## Professional Conclusion

This is not just a visual template; it's a frontend engineering tool. The code is exceptionally clean, follows the most modern conventions, and is **completely decoupled**, allowing for direct and simple integration of any backend logic (Node.js, Firebase, Supabase, etc.).

**Save over 120 hours of frontend development and deliver a final product that breathes quality and professionalism from the first second.**`,
      price_usd: 29,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.26.26 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.26.35 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.26.40 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.26.48 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.27.22 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.27.29 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.27.37 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.27.43 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.27.49 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.27.54 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.28.00 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.28.06 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.28.15 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.28.27 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.28.54 PM.png',
        '/products/Ecommerce%20General/Screenshot 2026-01-23 at 12.29.11 PM.png',
      ],
      tags: ['react'],
      category: 'ecommerce',
    },
    {
      title: 'Everest Admin Dashboard',
      slug: 'everest-admin-dashboard',
      description: `# Everest Admin Dashboard: The Definitive Premium Template for Control Panels

Optimize your workflow and deliver an elite user experience with **Everest Admin Dashboard**. This is a premium template artisanally designed for developers who don't settle for the basic. Built on a modern, high-performance ecosystem, Everest is the perfect foundation for your next SaaS project, eCommerce, or corporate admin panel.

## 🎨 Cutting-Edge Design and UI

Everest is not just a template; it's a visual experience. Designed under principles of modernity and efficiency:

- **Dark-First Aesthetic**: An elegant native dark mode, with _glassmorphism_ effects and background blurs that convey professionalism.
- **High-Fidelity Tailwind CSS**: Clean implementation with a custom color palette and coherent design tokens.
- **Premium Typography and Iconography**: Use of the _Manrope_ font for superior legibility and _Material Symbols_ for an intuitive, modern interface.
- **100% Responsive**: Every pixel has been adjusted to look flawless on mobile devices, tablets, and high-resolution monitors.

## ⚡ Next-Generation Technical Stack

We've selected the most powerful and fastest tools on today's market to ensure your development is smooth and scalable:

- **Vite 6**: Forget the wait. Instant hot module replacement (HMR) and optimized build times.
- **React 19**: Leverage the latest capabilities of the world's most popular UI library.
- **TypeScript**: Typed code to reduce errors and facilitate long-term maintenance.
- **Recharts**: Powerful, interactive data visualizations fully integrated into the dashboard's visual flow.
- **Modular Architecture**: Decoupled, clean, and easy-to-extend components.

## 📦 What's included in this template?

Everest comes loaded with everything you need so you don't have to start from scratch:

### 📄 Production-Ready Pages

1.  **Main Dashboard**: Overview with key metrics and performance charts.
2.  **Analytics**: Deep data analysis with advanced visualizations.
3.  **User Management**: Listings, profiles, and user statuses.
4.  **Product Catalog**: Interface optimized for inventories and eCommerce.
5.  **Order Management**: Detailed tracking of transactions.
6.  **Roles and Permissions**: Structure ready to implement access control.
7.  **System Configuration**: Full panel with tabs for customization.
8.  **Login and Verification**: Access screens with high-security design.
9.  **Error Pages (404/500)**: Friendly and professional system failure messages.

### 🧩 Reusable Components

- Smart sidebars (Sidebar).
- Dynamic headers (Header).
- Creation and edition modals (AddNewModal).
- Metric card and widget system.

## Professional Conclusion

**Everest Admin Dashboard** offers impeccable, organized, and distraction-free code. We deliver the complete frontend structure, allowing you to focus exclusively on business logic and data integration. It's fast, it's beautiful, and it's the tool that will take your projects to the next level.

---

_Reach the peak of frontend development with Everest._
`,
      price_usd: 49,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.13.42 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.20.33 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.21.00 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.21.15 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.21.22 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.21.35 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.21.45 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.21.55 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.22.13 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.22.21 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.22.31 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.22.42 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.23.14 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.23.32 PM.png',
        '/products/Everest%20Admin%20Dashboard/Screenshot 2026-01-22 at 6.23.56 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Light Bootstrap Dashboard PRO React',
      slug: 'light-bootstrap-dashboard-pro-react',
      description: `# Light Bootstrap Dashboard Pro React

Welcome to **Light Bootstrap Dashboard Pro React**, the ultimate premium template built on **Vite** and **React 19**, meticulously designed to provide you with a solid, aesthetic, and production-ready foundation for your next web projects.

This artisanal template focuses on offering the best **frontend** architecture so you can save hundreds of hours of structural and component design, allowing you to focus all your energy on integrating your own business logic and backend.

## 🎨 Design and UI

We have meticulously cared for every shadow, margin, and color so that the visual result is flawless.

- **Tailwind CSS v4:** Harnesses the power of the utility-first framework in its latest version to achieve highly flexible, maintainable, and modern styling.
- **Fully Responsive:** All components adapt perfectly to mobile screens, tablets, and wide monitors.
- **High Component Quality:** Accessible, minimalist, and highly reusable components designed for the best User Experience (UX) and User Interface (UI).
- **Clean Aesthetic:** Balanced styles, clean modular separations, and modern iconography thanks to Lucide React.

## ⚡ Technical Stack

- **Main Framework:** Vite + React 19 (Ultra-fast development performance and optimized production compilation).
- **Styling:** Tailwind CSS v4.
- **Featured UI Libraries:** Recharts (performance and beauty in analytical charts), React Router DOM (advanced and smooth routing), Motion (high-level animations), and React Calendar for interactive date handling.

## 📦 What's included?

We have built and laid out multiple common use cases for admin panels and complex interfaces. You will find the perfect pre-designed structure:

- **Dashboard and Analytics:** General view built with metrics ready to be populated with data (Dashboard.tsx, Charts.tsx).
- **Integrated Application Pages:** Functional UI examples like an interactive Calendar (Calendar.tsx) or Profile views (UserPage.tsx).
- **Functional Base Components:** Navigation bar (Navbar.tsx) and sidebar (Sidebar.tsx) structured to scale.
- **Authentication (UI):** Detailed designed screens for login and registration flows within /auth.
- **Structural Toolkits:** Design elements organized in modular folders (/components, /forms, /tables, and /maps).

**Important Note:** This project is a 100% frontend-focused design template. It is the ideal starting point with **clean, scalable, and well-structured code**, ready for you to integrate your own APIs, connect your server, and apply your business logic and backend architectures completely independently.
`,
      price_usd: 199,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.21.56 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.01 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.05 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.10 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.15 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.23 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.27 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.32 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.38 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.42 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.47 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.52 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.22.59 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.23.03 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.23.08 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.23.19 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.23.25 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.23.32 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.23.36 PM.png',
        '/products/Light%20Bootstrap%20Dashboard%20PRO%20React/Screenshot 2026-02-25 at 3.23.45 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Marketplace Multivendor',
      slug: 'marketplace-multivendor',
      description: `# Marketplace Multivendor: The Definitive Solution for Premium E-commerce

Take your project to the next level with **Marketplace Multivendor**, a high-performance frontend template meticulously designed to offer an exceptional user experience. Built on the ultra-fast **Vite** ecosystem, this template is the perfect foundation for any modern and professional e-commerce ecosystem.

## 🎨 Design and UI

Our template stands out for a clean, modern, and highly professional aesthetic, designed to build trust from the first second.

- **Architecture with Tailwind CSS**: Modular and scalable styles that allow deep customization without sacrificing performance.
- **Native Dark Mode**: Full support for light and dark modes, adapting to each user's preferences with a curated color palette.
- **Fully Responsive**: Adaptive design that guarantees a perfect experience on mobile devices, tablets, and desktop computers.
- **Micro-interactions**: Smooth transitions and subtle animations that elevate the feeling of an artisanal, high-end product.
- **Premium Typography**: Use of the Manrope font for superior legibility and a contemporary touch.

## ⚡ Technical Stack

We have selected the most robust and fastest technologies in today's market:

- **Vite**: The next-generation development environment that guarantees instant load speeds during development and optimized builds.
- **React 19**: Leverage the latest capabilities of the world's most popular UI library.
- **TypeScript**: Typed code for maximum robustness and unrivaled ease of maintenance.
- **React Router 7**: Efficient route management for a seamless SPA (Single Page Application) navigation experience.
- **Context API**: Global state management for critical features like the shopping cart.

## 📦 What's included?

This template offers complete coverage of a marketplace's needs, from shopping to management:

### E-commerce Front-end

- **Home Page (Landing)**: Designed to maximize conversion and engagement.
- **Seller Storefront**: Dedicated template for sellers to showcase their brand.
- **Product Detail**: Image gallery, variants, and detailed descriptions.
- **Complete Purchase Flow**: Reactive cart, optimized checkout page, and invoice generator.

### Seller Administration Dashboard

- **Overview**: Control panel with key metrics and store status.
- **Advanced Analytics**: Charts and data visualization for sales tracking.
- **Inventory Management**: Interface for product and stock administration.
- **Order Control**: Detailed listings for sales logistics management.
- **Settings and Support**: Panels for store customization and help center.

### Security and Access

- **Professional Login**: Secure and aesthetic access interface.
- **Recovery Systems**: Integrated account recovery flow.
- **Two-Factor Verification (2FA)**: Visual support for additional security layers.

---

**Final Note**: This is a purely frontend product. The code is strictly organized, commented, and ready for any developer to connect their own business logic, database, or trusted APIs. Save over 200 hours of design and UI development with this premium foundation!
`,
      price_usd: 39,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.08.45 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.09.10 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.09.18 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.09.26 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.09.59 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.10.07 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.10.16 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.10.25 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.10.34 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.12.21 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 1.12.42 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.12.37 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.12.43 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.12.51 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.12.58 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.13.05 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.13.13 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.13.23 PM.png',
        '/products/Marketplace%20Multivendor/Screenshot 2026-01-23 at 2.14.26 PM.png',
      ],
      tags: ['react'],
      category: 'ecommerce',
    },
    {
      title: 'Material Dashboard 3 PRO React',
      slug: 'material-dashboard-3-pro-react',
      description: `# Material Dashboard 3 Pro React

**Material Dashboard 3 Pro React** is a premium UI template, production-ready and specifically designed to accelerate the development of your business applications. Built on the fast **Vite** and **React** ecosystem, it provides you with a solid, scalable, and visually stunning foundation that you can adapt to any business logic.

Forget about starting from scratch; jump straight into adding value to your product with an artisanal and professional frontend.

## 🎨 Design and UI

We have cared for every pixel to offer a modern, clean, and functional aesthetic that your users will love:

- **Tailwind CSS v4:** The entire styling architecture is based on Tailwind, allowing for extreme and direct customization without having to fight with spaghetti CSS files.
- **Premium User Experience (UX):** Intuitive interfaces, smooth transitions (thanks to framer-motion), and consistent layouts that convey trust and professionalism.
- **100% Responsive:** Designed with a 'mobile-first' approach, ensuring the layout looks flawless on ultrawide monitors, laptops, tablets, and smartphones.

## ⚡ Technical Stack

This template uses cutting-edge technologies to ensure optimal performance for both the developer and the end user:

- **Main Framework:** Vite (ultra-fast main bundler) and React 19.
- **Styling:** Tailwind CSS v4 for a utility-first design.
- **Iconography:** Lucide React to integrate consistent, elegant, and lightweight icons.
- **Charts and Data:** Modern integration with Recharts for clean and responsive data visualizations.
- **Extras:** Framer Motion for elegant animations.

## 📦 What's included?

We have prepared a complete ecosystem of views to cover the real needs of any SaaS platform, admin panel, or commercial site. It includes **24 exclusive pages** in the pages directory, ready to be integrated:

- **Analysis and Main Dashboards:** Analytics, Sales.
- **E-commerce Management:** ProductPage, NewProduct, OrderList, OrderDetails.
- **Accounts and Users:** Profile, AccountSettings, SignIn, SignUp, ResetPassword, NewUser.
- **Productivity Tools:** Calendar, Kanban, Timeline, AllProjects.
- **Billing and Finance:** Billing, Invoice, Pricing.
- **Data Visualization:** DataTables, Charts, Widgets.
- **Extra Components:** RTL and Notifications ready to use.

## Ready for your Code

The code for **Material Dashboard 3 Pro React** has been structured seeking strict separation of responsibilities. Being a template purely focused on visual aspects and client interaction, all components are clean and free of proprietary backend code or services.

It is up to you to connect these amazing components with your own business logic and custom APIs. Build incredible panels in record time!
`,
      price_usd: 29,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.18.37 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.18.46 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.18.51 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.18.55 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.18.58 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.02 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.07 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.11 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.16 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.21 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.28 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.34 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.39 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.44 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.53 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.19.58 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.03 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.10 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.16 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.21 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.27 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.41 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.45 PM.png',
        '/products/Material%20Dashboard%203%20PRO%20React/Screenshot 2026-02-25 at 3.20.51 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Material Dashboard Material-UI v4',
      slug: 'material-dashboard-material-ui-v4',
      description: `# Material Dashboard Material UI v4

Material Dashboard Material UI v4 is a premium, professional design template, production-ready and strongly focused on providing the best frontend development experience using **Vite** and **React**. If you are looking to accelerate the creation of your next admin panel or web application without compromising visual quality or code architecture, this template is your ideal starting point.

## 🎨 Design and UI

We have cared for every pixel to ensure a modern, clean, and highly functional aesthetic.

- **High-Quality Design:** Material Design inspired styles with a modern touch, employing soft shadows, rounded edges, and vibrant gradients to highlight important information.
- **Tailwind CSS:** The entire visual system is built solely on **Tailwind CSS**. Forget the headaches of writing custom CSS; leverage the speed and consistency of Tailwind's utility classes.
- **Fully Responsive:** The interface adapts perfectly to any device, from ultrawide monitors to mobile screens, thanks to a _mobile-first_ architecture.
- **Fluid Animations:** Polished and smoothed interactions guaranteed by the integration of **Framer Motion**, bringing life and dynamism to the user experience.

## ⚡ Technical Stack

This template is built on a modern and efficient stack, ensuring ultra-fast load times and an excellent development experience:

- **Framework:** **React 19** on **Vite** for immediate builds and an agile development environment (HMR).
- **Styles:** Tailwind CSS (version 4) combined with tailwind-merge and clsx for absolute control over the design.
- **Iconography:** Lucide React, offering a beautiful and consistent collection of scalable icons.
- **Charts and Visualization:** Recharts, ready to render complex data in attractive visualizations.
- **Routing:** React Router DOM (v7) implemented and configured throughout the application.

## 📦 What's included?

By acquiring this template, you get access to an ecosystem of already assembled components and views, ready to be connected to your own business logic:

**Pre-built Pages:**

- 📊 **Dashboard:** Main view with metrics, charts, and summaries.
- 👤 **User Profile:** Interface for user account management.
- 📋 **Table List:** Clean layouts for complex data tables.
- 📝 **Forms:** Structured and organized forms.
- 💬 **Notifications:** Visual alert and notification system.
- 💳 **Pricing:** Attractive pricing tables focused on conversion.
- ⏳ **Timeline:** Chronological visualization of events.
- 🧩 **Widgets, Typography, Icons, and Maps:** Additional views to extend your app's functionality.

**Premium Reusable Components:**

- Fully responsive Sidebar and Navbar system.
- Card component family (Header, Body, Footer) with native support for gradient styles and structured shadows.
- Centralized layout and configuration components.

### Ready for your Logic

**Important:** Material Dashboard Material UI v4 is a strictly **Frontend/UI** template. It does not impose any backend restrictions, so it **does not include** databases, ORMs (like Prisma), or pre-configured authentication systems.

The code is meticulously organized and clean, prepared as a blank canvas for you or your engineering team to add your own logic, connect your own APIs, and decide which database to use. Save weeks of layout and design, and focus on developing the true features of your product.
`,
      price_usd: 39,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.16.48 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.16.54 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.16.58 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.01 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.05 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.11 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.28 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.35 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.41 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.47 PM.png',
        '/products/Material%20Dashboard%20Material-UI%20v4/Screenshot 2026-02-25 at 3.17.52 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'NextJS Material Dashboard PRO Material-UI v4',
      slug: 'nextjs-material-dashboard-pro-material-ui-v4',
      description: `# NextJS Material Dashboard PRO Material-UI v4

NextJS Material Dashboard PRO Material-UI v4 is a **production-ready premium template** focused on offering the best user and developer experience in the React and Vite ecosystem.

This product is artisanally designed to be the perfect bridge between spectacular design and fully scalable code. If you are looking to accelerate your frontend development without compromising on performance or aesthetics, this template is your best ally.

## 🎨 Design and UI

Our template stands out for a meticulous design that merges usability and visual beauty.

- **Visual Quality**: Components built with a Pixel-Perfect approach.
- **Tailwind CSS**: Native integration of Tailwind CSS v4 to ensure modern and highly customizable styles.
- **Fully Responsive**: Adaptive design that visualizes perfectly on any device, from desktop to mobile screens.
- **Modular Components**: Design thought for reuse, ensuring homogeneity throughout the visual application.

## ⚡ Technical Stack

The project has been initialized on a modern, fast, and future-oriented architecture:

- **Core Framework**: React 19 along with **Vite**, guaranteeing instantaneous compilation times and extremely fast Hot Module Replacement (HMR).
- **Styling**: Tailwind CSS, allowing for agile customization via utility classes.
- **Routing**: Stable integration with React Router DOM v7 for seamless navigation.
- **Data Visualization**: Recharts integrated natively for clean and performing analytical charts.
- **Date Handling and Utilities**: date-fns, clsx, and tailwind-merge for safe data handling and efficient styling code.

## 📦 What's included?

The template comes packed with dozens of example pages and hundreds of components to cover all common (and not so common) use cases of a professional admin panel:

### Application Pages

- **Dashboards Analytics and General**: Informative panels with real-time metrics visualized via interactive charts.
- **Authentication (UI)**: Login, Register, and Lock Screen pages designed to quickly integrate into your auth system.
- **Profiles**: View and edit profile pages (User Profile).
- **Pricing and Subscriptions**: Templates for Pricing tables.
- **Pre-styled Notifications**: View module with notifications and alerts.
- **RTL Support**: Demonstrated and functional right-to-left text orientation.
- **Auxiliary Pages**: ErrorPage (404/500).

### Components and Forms

- **Advanced Tables**: ReactTables, Extended Tables, and standardized base Tables.
- **Forms**: Base forms, Extended Forms, and Form Validation (ValidationForms).
- **Maps**: Google Maps, Vector Maps, and Full-screen Maps.
- **Interface Components**: Interactive buttons, SweetAlerts, Multi-level Collapse, Modal panels and Tabs, Dynamic Calendars, Stylized Typography, Iconography, Informative Widgets, and step-by-step assistants (Wizard).
- **Foundational Structure**: Native GridSystem adapted to components, advanced Sidebar, and preconfigured Navbar.

---

**Technical Note**: The value of **NextJS Material Dashboard PRO Material-UI v4** lies in its extraordinary **visual quality and clean, organized, and independent frontend architecture**. This project is delivered purely as the UI/UX that forms the visual base, which means the code is ready and waiting to be freely connected with the logic, database, or service of your choice.🚀
`,
      price_usd: 149,
      file_url: '',
      framework: ['react', 'nextjs'],
      downloads: 0,
      images: [
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.08.10 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.08.17 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.08.22 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.08.39 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.08.48 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.08.58 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.15 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.18 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.29 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.33 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.41 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.44 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.48 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.09.51 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.04 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.09 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.13 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.17 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.21 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.24 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.39 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.10.44 PM.png',
        '/products/NextJS%20Material%20Dashboard%20PRO%20Material-UI%20v4/Screenshot 2026-02-25 at 3.11.01 PM.png',
      ],
      tags: ['nextjs'],
      category: 'dashboards',
    },
    {
      title: 'NextJS Material Tailwind Dashboard PRO',
      slug: 'nextjs-material-tailwind-dashboard-pro',
      description: `# nextjs material tailwind dashboard pro

Welcome to **nextjs material tailwind dashboard pro**, a professional-grade and production-ready frontend template built on **Vite** and **React**. This template has been artisanally designed for developers and teams looking to accelerate the creation of modern user interfaces, admin panels, and SaaS systems, without compromising visual quality or performance.

**Notice:** This is strictly a frontend design and layout template (UI Template). It does not include backend logic, real databases, or final authentication integration, giving you total freedom to connect your own API or service (Firebase, Supabase, Node.js, etc.).

---

## 🎨 Design and UI

We have cared for every visual detail to offer a premium experience that transmits trust and quality from start to finish:

- **Tailwind CSS:** The entire styling is built on Tailwind CSS, which guarantees simple, fast, and highly adaptable customization.
- **High-Quality Components:** Includes a wide range of reusable components, from statistical cards and data tables to complex forms and charts.
- **Fully Responsive:** The interface adapts smoothly and perfectly to mobile devices, tablets, and desktop screens.
- **Clean and Modern Design:** Intuitive interface focused on user experience (UX) via subtle animations (using Framer Motion) and a coherent icon system.

## ⚡ Technical Stack

This template leverages the most modern and fastest technologies in the frontend ecosystem:

- **Framework:** React 19 + Vite (Ultra-fast performance and instant Hot Module Replacement)
- **Styles:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Iconography:** Lucide React
- **Routing:** React Router DOM v7
- **Utilities:** clsx, tailwind-merge, date-fns

## 📦 What's included?

We have built more than 25 pages ready to be integrated with your data:

- **Dashboards:** Analytics and Sales.
- **Applications (App):** Widgets, Charts, Notifications, Wizard, Data Tables, and Calendar.
- **E-commerce:** Product Catalog (Product Page), Product Creation/Edit, Order List, and Order Details.
- **Profiles and Pages:** Profile Overview, All Projects, Project Details, Timeline, and Pricing.
- **Users:** Account Settings, User Settings, Billing, Invoice, and New User.
- **Authentication:** Sign In, Sign Up, and Reset Password.

Additionally, it includes structural **Layouts** (Dashboard Layout) that automatically manage your sidebar and navigation bar (app bar).

---

## 🚀 Ready to Integrate

Our goal is to give you the best initial foundation. The code is strictly frontend, is **clean, modularized, and organized** under React best practices. Each component and page is structured so you can easily implement your API calls, global state logic, authentication, and real databases in record time. Build your next big idea on solid foundations.
`,
      price_usd: 49,
      file_url: '',
      framework: ['react', 'nextjs'],
      downloads: 0,
      images: [
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.22.22 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.22.35 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.22.44 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.22.49 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.22.55 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.22.58 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.23.03 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.23.07 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.23.11 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.23.15 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.23.19 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.23.22 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.23.33 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.06 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.11 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.17 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.22 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.26 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.31 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.38 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.43 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.24.57 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.25.04 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.25.08 PM.png',
        '/products/NextJS%20Material%20Tailwind%20Dashboard%20PRO/Screenshot 2026-02-25 at 2.25.17 PM.png',
      ],
      tags: ['nextjs'],
      category: 'dashboards',
    },
    {
      title: 'Notus React',
      slug: 'notus-react',
      description: `# Notus React - Premium UI Template

Notus React is a premium frontend template, meticulously designed for developers and teams looking to launch modern web applications with a polished, professional, and high-performance user interface. Built on **Vite**, this template is ready for production, saving you weeks of structural design and layout work.

---

## 🎨 Design and UI

Our template stands out for a visually attractive, artisanal design thought out for user experience (UX).

- **Custom Tailwind CSS:** Uses the power and flexibility of Tailwind CSS v4 to ensure a cohesive and easily customizable design.
- **High-Quality Components:** Each element, from buttons to sophisticated statistics cards, has been crafted in detail.
- **100% Responsive:** Ensures a fluid and flawless experience on both mobile devices and desktop screens.
- **Fluid Animations and Typography:** Precise micro-interaction details that grant a "premium" feel to all navigation.

---

## ⚡ Technical Stack

The template relies on leading technologies in the modern ecosystem to guarantee speed, optimization, and a superior development experience:

- **Framework:** **Vite** + **React 19** for ultra-fast load times and instant compilation.
- **Language:** **TypeScript**, guaranteeing robust, predictable, and strongly typed code.
- **Styles:** **Tailwind CSS v4**, the latest in high-performance CSS utilities.
- **Iconography:** **Lucide React**, beautiful, consistent, and lightweight icons.
- **Data Visualization:** **Recharts**, for interactive charts (lines, bars) ready to integrate with your data.
- **Animations:** **Framer Motion**, for silky and professional interface transitions.

---

## 📦 What's included?

We have built a complete ecosystem of views and components to cover the key needs of your application.

### Ready-to-Use Views:

- **Landing Page:** A persuasive landing page to catch your customers' attention.
- **Administration Panel (Admin):**
  - **Dashboard:** Main control center with multiple chart variations.
  - **Tables:** Impeccable layout to show large volumes of data.
  - **Maps:** Pre-styled view focused on presenting geographic data.
  - **Settings:** Account and profile settings interface.
- **Authentication:**
  - **Login:** Classic and elegant access screen.
  - **Register:** Attractive form for user registrations.
- **Application Pages:**
  - **Profile:** Modern user profile view.

### Reusable Components:

- **Sidebar & Navbar:** Expandable and responsive navigation.
- **Modular Cards:**
  - CardBarChart and CardLineChart (Analytical charts).
  - CardPageVisits and CardSocialTraffic (Detailed table metrics).
- **Metrics:** Components like HeaderStats ideal for showing quick KPIs at the top of the control panel.

---

Notus React is the ideal visual structure. Its code is clean, strictly organized, and **100% free of forced backend logic**, which means you have the perfect canvas to connect your own databases, APIs, or authentication providers at your own pace. Boost your frontend product development and surprise your customers from day one!
`,
      price_usd: 0,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Notus%20React/Screenshot 2026-02-25 at 1.13.58 PM.png',
        '/products/Notus%20React/Screenshot 2026-02-25 at 1.14.06 PM.png',
        '/products/Notus%20React/Screenshot 2026-02-25 at 1.14.14 PM.png',
        '/products/Notus%20React/Screenshot 2026-02-25 at 1.14.23 PM.png',
        '/products/Notus%20React/Screenshot 2026-02-25 at 1.14.28 PM.png',
      ],
      tags: ['react'],
      category: 'ui-kits',
    },
    {
      title: 'Paper Dashboard React',
      slug: 'paper-dashboard-react',
      description: `# 🚀 Paper Dashboard React - Premium UI Template

**Paper Dashboard React** is a top-tier frontend template, meticulously designed for developers and agencies looking to accelerate the creation of their web applications. Built on an ultra-fast development environment with **Vite** and **React 19**, this template is production-ready and offers a solid, modern, and highly customizable foundation.

## 🎨 Design and UI

Our template stands out for artisanal care in every pixel:

- **Tailwind CSS v4:** Modern, fluid, and easily extensible styles. Forget spaghetti CSS; customize your design via utilities.
- **High-Quality Components:** Buttons, cards, forms, and navigation bars designed with attention to detail, using clean abstractions with clsx and tailwind-merge.
- **Dynamic Experience:** Fluid animations powered by **Framer Motion** that elevate the product's premium feel.
- **Fully Responsive:** Perfect adaptation to any screen size, from mobile devices to ultra-wide monitors.

## ⚡ Technical Stack

The project uses cutting-edge technology to ensure the best performance and development experience (DX):

- **Frontend Framework:** React 19
- **Build Tool:** Vite (Instant reload times)
- **Routing:** React Router v7
- **Styles:** Tailwind CSS v4
- **Iconography:** Lucide React (Sharp and lightweight icons)
- **Data Visualization:** Recharts for interactive charts
- **UI Utilities:** clsx and tailwind-merge

## 📦 What's included?

This template provides you with a complete set of ready-to-use views and architectural components:

**Pre-built Pages:**

- 📊 **Dashboard:** Main view with interactive charts and metrics.
- 👤 **UserProfile:** User profile management and settings.
- 📋 **Tables:** Elegant and structured tabular data layouts.
- 🌍 **Maps:** Visual integration for maps.
- 🔔 **Notifications:** Aesthetically pleasing alert and notification system.
- 🔠 **Typography:** System typographic style guide.
- 🎨 **Icons:** Visual catalog of integrated iconography.
- 📄 **PlaceholderPage:** Structured blank view to quickly build new screens.

**Base Components:**

- Organized and modular Navbar and Sidebar for seamless application-level navigation.

## 💡 Why choose this template?

**Code is king.** We have built this template with your productivity in mind:

- **Clean and Organized Code:** Logical and intuitive folder structure.
- **Backend Agnostic:** We don't promise magic systems that break later. Being purely frontend code (without hidden dependencies like databases or Prisma), you can connect your own APIs or authentication systems (Node, Python, Go, Supabase, Firebase, etc.) with total freedom.
- **Ready for you to bring to life:** You have a robust foundation where you only need to add your business logic to have a ready product.

Accelerate your next big project with _Paper Dashboard React_ and elevate your frontend engineering standard.
`,
      price_usd: 199,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Paper%20Dashboard%20React/Screenshot 2026-02-25 at 1.15.55 PM.png',
        '/products/Paper%20Dashboard%20React/Screenshot 2026-02-25 at 1.18.08 PM.png',
        '/products/Paper%20Dashboard%20React/Screenshot 2026-02-25 at 1.18.17 PM.png',
        '/products/Paper%20Dashboard%20React/Screenshot 2026-02-25 at 1.18.22 PM.png',
        '/products/Paper%20Dashboard%20React/Screenshot 2026-02-25 at 1.18.28 PM.png',
        '/products/Paper%20Dashboard%20React/Screenshot 2026-02-25 at 1.18.34 PM.png',
        '/products/Paper%20Dashboard%20React/Screenshot 2026-02-25 at 1.18.38 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Purity UI Dashboard PRO',
      slug: 'purity-ui-dashboard-pro',
      description: `# Purity UI Dashboard Pro

This is a production-ready premium React template, fully optimized with the speed of **Vite**. Artisanally built to provide the best foundation for your next project, SaaS, admin panel, or internal platform. We focused on delivering clean, readable code with a scalable structure.

## 🎨 Design and UI

We have cared for every pixel to ensure your product stands out visually:

- **Tailwind CSS v4:** Extensively used to provide fully customizable, consistent, and scalable styles without having to leave your code file.
- **Fluid Animations:** Polished interactions and transitions using framer-motion, making the interface feel alive and respond flawlessly.
- **Fully Responsive:** Designed with a _mobile-first_ approach. The interface adapts perfectly to mobile devices, tablets, and large desktops automatically.
- **Professional Iconography:** Meticulously integrated with lucide-react to guarantee a modern and balanced look in every view.

## ⚡ Technical Stack

This frontend template relies on a robust and modern ecosystem, ensuring high performance and an excellent development experience:

- **Framework Options:** [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Advanced Routing:** react-router-dom for fast Single Page Application (SPA) navigation, including support for nested layouts.
- **Styles Ecosystem:** [Tailwind CSS v4](https://tailwindcss.com/) along with utilities like clsx and tailwind-merge for dynamic class management.
- **Data Visualization:** Ready-to-show data components thanks to recharts.

## 📦 What's included?

We have built an exhaustive series of pages and modular components ready to be adapted to your business logic:

### Ready-to-Use Views:

- **Main Dashboard:** General summary with highlighted charts and metrics.
- **Billing:** Billing management and financial histories.
- **Table Pages (Tables):** Tabular data listings, including the project table.
- **User Profile (Profile):** Design for account settings and user data.
- **RTL Support:** Dedicated page to demonstrate Right-To-Left (RTL) support.
- **Authentication Flows:** Complete and independent SignIn and SignUp views.
- **Placeholder Pages:** Wildcard pages prepared for your new ideas.

### Reusable Components:

- **Layout and Navigation:** Main Layout component, a smart and collapsible Sidebar, and a unified Header.
- **Data Widgets:** Special components like OrdersOverview and ProjectsTable ready to be populated with your data.

---

**Important Note:** This product focuses exclusively on delivering the highest quality visual and frontend layer and clean code. The template is systematically structured so you can connect your own business logic and APIs with total ease. Start programming what matters today, we already solved the interface.
`,
      price_usd: 19,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Purity%20UI%20Dashboard%20PRO/Screenshot 2026-02-25 at 1.19.25 PM.png',
        '/products/Purity%20UI%20Dashboard%20PRO/Screenshot 2026-02-25 at 1.19.32 PM.png',
        '/products/Purity%20UI%20Dashboard%20PRO/Screenshot 2026-02-25 at 1.19.36 PM.png',
        '/products/Purity%20UI%20Dashboard%20PRO/Screenshot 2026-02-25 at 1.19.42 PM.png',
        '/products/Purity%20UI%20Dashboard%20PRO/Screenshot 2026-02-25 at 1.19.48 PM.png',
        '/products/Purity%20UI%20Dashboard%20PRO/Screenshot 2026-02-25 at 1.19.53 PM.png',
        '/products/Purity%20UI%20Dashboard%20PRO/Screenshot 2026-02-25 at 1.19.59 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
    {
      title: 'Vision UI Dashboard PRO Chakra',
      slug: 'vision-ui-dashboard-pro-chakra',
      description: `# Vision UI Dashboard Pro - Premium Frontend Template

Vision UI Dashboard Pro is a premium frontend template, artisanally designed and production-ready. Focused entirely on providing the best developer and user experience, it is built on the unmatched speed of **Vite** and the **React** ecosystem. Ideal for startups, admin panels, SaaS systems, and complex data applications.

## 🎨 Design and UI

Each component has been carefully designed to offer an impressive and modern visual appearance.

- **Tailwind CSS:** Use of Tailwind CSS for a purely utility-based style, facilitating maximum customization without global CSS complications.
- **Component Quality:** Modular, highly cohesive, and consistent components throughout the application.
- **Dark Mode & Responsiveness:** Perfect adaptation to any screen size and integrated support for a top-tier user experience.
- **Fluid Animations:** Rich interactions thanks to Framer Motion, bringing your final product to life.

## ⚡ Technical Stack

Our template provides a solid and vanguard technical foundation:

- **Core:** React 19 empowered by Vite, guaranteeing instant server starts and ultra-fast builds.
- **Routing:** React Router v7 for SPA (Single Page Application) navigation without reloads.
- **Visual Libraries:** Lucide React for modern and lightweight iconography, and Recharts for powerful and interactive data visualization.
- **UI Utilities:** clsx and tailwind-merge for dynamic and conflict-free CSS class management.

## 📦 What's included?

The template comes packaged with a wide variety of essential pages and layouts ready for your project:

- **Base Layouts:** Navbar, Sidebar, and DashboardLayout.
- **Main Pages:** Dashboard, Profile (ProfileOverview), User Reports, and Analytics (Charts).
- **E-commerce & Products:** ProductPage, NewProduct, EditProduct, OrderList, OrderDetails, Invoice, and Billing Pages (Billing, PricingPage).
- **Management & CRM:** Pages for User Management (NewUser), Teams, Projects (AllProjects, GeneralProjects), and agile boards (Kanban).
- **Productivity Tools:** Calendar, Timeline, Alerts, and Widgets.
- **Auth UI:** Beautifully designed login and registration screens (SignIn, SignUp, AuthCover, AuthIllustration).
- **Specialized Pages:** RTL (Right-To-Left) support, DataTables, and Wizards (Multi-step forms).

### Start with the best foundation

The code of Vision UI Dashboard Pro is meticulous, clean, and semantically organized. This is a 100% design and frontend template; it does not include heavy backend integrations by default, making it **the perfect canvas**. It is completely ready for your engineering team to connect it to their own business logic, authentication system, or database.
`,
      price_usd: 39,
      file_url: '',
      framework: ['react'],
      downloads: 0,
      images: [
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.26.06 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.26.32 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.26.38 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.26.43 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.26.49 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.03 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.08 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.12 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.18 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.22 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.27 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.31 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.36 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.40 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.47 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.52 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.27.57 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.01 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.07 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.14 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.18 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.23 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.28 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.34 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.42 PM.png',
        '/products/Vision%20UI%20Dashboard%20PRO%20Chakra/Screenshot 2026-02-25 at 1.28.48 PM.png',
      ],
      tags: ['react'],
      category: 'dashboards',
    },
  ],
};
