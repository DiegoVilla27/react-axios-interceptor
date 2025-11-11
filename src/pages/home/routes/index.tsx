import Layout from "@/layout";
import { routesPaths } from "@/router/list";
import type { RouteObject } from "react-router-dom";
import HomePage from "..";

/**
 * Defines the routing configuration for the Home page.
 *
 * This route object uses the `Layout` component as a wrapper and renders
 * the `HomePage` component within it. It follows React Router's `RouteObject` structure.
 *
 * @constant
 * @type {RouteObject}
 *
 * @property {string} path - The path corresponding to the Home page.
 * @property {JSX.Element} element - The React element to render for this route.
 *
 */
const HomePageRoutes: RouteObject = {
  path: routesPaths['home'].path,
  element: (
    <Layout>
      <HomePage />
    </Layout>
  )
};

export default HomePageRoutes;
