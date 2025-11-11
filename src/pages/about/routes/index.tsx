import Layout from "@/layout";
import type { RouteObject } from "react-router-dom";
import AboutPage from "..";
import { routesPaths } from "@/router/list";

/**
 * Defines the route configuration for the About page.
 *
 * This route uses the global {@link Layout} component to maintain a consistent
 * application structure, wrapping the {@link AboutPage} component as its main content.
 *
 * @constant
 * @type {RouteObject}
 *
 * @property {string} path - The route path, dynamically retrieved from {@link routesPaths.about}.
 * @property {JSX.Element} element - The React element to render for this route.
 *
 */
const AboutPageRoutes: RouteObject = {
  path: routesPaths['about'].path,
  element: (
    <Layout>
      <AboutPage />
    </Layout>
  ),
};

export default AboutPageRoutes;
