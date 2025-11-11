# 🧩 React Vite Clean Architecture Boilerplate

A professional **React + Vite** boilerplate designed **scalable modular structure**.\
Includes support for **TypeScript**, **Axios HTTP client**, **React
Router**, and **environment-based configuration**.

------------------------------------------------------------------------

## 🚀 Features

-   ⚛️ **React 18** with functional components and hooks\
-   ⚙️ **Vite** for ultra-fast builds and hot module replacement\
-   🌐 **Axios** with interceptor setup for centralized request
    handling\
-   🗂️ **Type-safe routing** using React Router v6\
-   🧩 **CSS Modules** with scoped naming conventions\
-   🧭 **Environment management** for `development` and `production`\
-   🧰 Organized folder aliases for better imports

------------------------------------------------------------------------

## ⚙️ Environment Variables

Create environment files based on your deployment needs:

    .env

Each file must define:

``` bash
VITE_API_URL=https://api.example.com
```

Access the environment variable using:

``` ts
import ENVIRONMENTS from "@/environments";
console.log(ENVIRONMENTS.apiUrl);
```

------------------------------------------------------------------------

## 🧠 Core Concepts

### 🏗️ Clean Architecture Layers

-   **Entities:** Define core data structures (`IUserEntity`).
-   **Models:** Represent API response structures (`IUserModel`).
-   **Mappers:** Transform API data into app-level entities
    (`mappingUsers`).
-   **Services:** Contain business logic and API calls (`getUsers`).

### 🧩 Routing System

Routing is defined in modular files to ensure scalability.

Example:

``` ts
const HomePageRoutes: RouteObject = {
  path: routesPaths['home'].path,
  element: (
    <Layout>
      <HomePage />
    </Layout>
  )
};
```

------------------------------------------------------------------------

## 🛠️ Scripts

  Command             Description
  ------------------- --------------------------
  `npm run dev`       Start development server
  `npm run build`     Build for production
  `npm run preview`   Preview production build

------------------------------------------------------------------------

## 🧰 Technologies

-   **React 18**
-   **Vite**
-   **TypeScript**
-   **Axios**
-   **React Router v6**
-   **CSS Modules**

------------------------------------------------------------------------

## 👨‍💻 Author

**Diego Villanueva**\
Frontend Software Engineer & Technical Leader\
💼 8+ years of experience in Angular, React, and modern frontend
architecture.\
🌐 Remote developer passionate about clean code, scalability, and
product vision.