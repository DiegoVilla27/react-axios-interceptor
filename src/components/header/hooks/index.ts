import { options, type IMenuOption } from "../data";

/**
 * @hook useHeader
 * @description
 * Custom React hook that provides navigation menu options for the application's header component.
 * 
 * This hook abstracts the retrieval of the header menu configuration, allowing the `Header` component
 * to remain clean and focused only on rendering logic. It returns a typed array of menu items defined
 * in the `data` module.
 * 
 * @remarks
 * - Currently returns a static menu imported from `../data`.
 * - Can be extended later to support dynamic menus fetched from an API or user roles.
 * - Ensures strong typing through the `IMenuOption` interface.
 * 
 * @interface IMenuOption
 * @property {string} label - The display text for the menu item.
 * @property {string} path - The navigation path associated with the menu item.
 * 
 */
const useHeader = () => {
  /** List of available navigation menu options. */
  const menu: IMenuOption[] = options;

  return { menu };
};

export default useHeader;
