import { routesPaths } from "@/router/list";

/**
 * @interface IMenuOption
 * @description
 * Represents a single menu item in the application's navigation system.
 * Each option defines a label (display text) and a path (URL route).
 * 
 * @property {string} label - The visible text displayed in the navigation menu.
 * @property {string} path - The route path associated with this menu item.
 * 
 */
export interface IMenuOption {
  label: string;
  path: string;
}

/**
 * @constant options
 * @description
 * Static list of navigation menu items used in the application header or sidebar.
 * 
 * The paths are dynamically imported from the central routing configuration (`routesPaths`)
 * to ensure consistency between navigation items and defined app routes.
 * 
 * @remarks
 * - Keeps menu definitions centralized and in sync with your routing system.
 * - Can be easily extended with icons, roles, or access control metadata.
 * 
 * @type {IMenuOption[]}
 */
export const options: IMenuOption[] = [
  { label: "Home", path: routesPaths.home.path },
  { label: "About", path: routesPaths.about.path },
];
