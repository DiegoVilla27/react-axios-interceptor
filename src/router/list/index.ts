/**
 * @interface IRoutePath
 * @description
 * Represents a single route in the application.  
 * Each route has a defined path and may optionally contain nested child routes.
 *
 * @property {string} path - The route path (e.g., `/about`, `/users/:id`).
 * @property {Record<string, IRoutePath> | null} [children] - Optional nested routes for hierarchical routing.
 */
export interface IRoutePath {
  path: string;
  children?: Record<string, IRoutePath> | null;
}

/**
 * @typedef IRoutesPath
 * @description
 * Defines the complete routing structure of the application.  
 * Each key (e.g., `home`, `about`) represents a named route mapped to an `IRoutePath` definition.
 */
export type IRoutesPath = Record<string, IRoutePath>;

/**
 * @constant routesPaths
 * @description
 * Collection of all application routes following the `IRoutesPath` structure.
 *
 * @example
 * routesPaths.home.path   // returns "/"
 * routesPaths.about.path  // returns "/about"
 */
export const routesPaths: IRoutesPath = {
  home: { path: '/' },
  about: { path: '/about' }
};
