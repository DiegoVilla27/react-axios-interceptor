import { createBrowserRouter } from "react-router-dom";
import RoutesPrivate from "./private";
import RoutesPublic from "./public";

/**
 * @constant router
 * @description
 * Main router configuration for the application using React Router v6.  
 * Combines private and public routes and provides a fallback route for unmatched paths (404 page).
 *
 */
const router = createBrowserRouter([
  ...RoutesPrivate,
  ...RoutesPublic,
  {
    path: "/*",
    element: <div>Page not found: 404</div>
  }
]);

export default router;
