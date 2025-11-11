import AboutPageRoutes from "@/pages/about/routes";
import HomePageRoutes from "@/pages/home/routes";
import type { RouteObject } from "react-router-dom";

/**
 * @constant RoutesPrivate
 * @type {RouteObject[]}
 * @description
 * Array of private route definitions for the application.  
 * These routes are intended to be used inside a router that requires authentication.
 * Each element corresponds to a page route imported from the page modules.
 *
 */
const RoutesPrivate: RouteObject[] = [
  HomePageRoutes,
  AboutPageRoutes
];

export default RoutesPrivate;
