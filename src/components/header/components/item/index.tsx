import { NavLink } from "react-router-dom";
import type { IMenuOption } from "../../data";
import styles from "./styles.module.css";

/**
 * @component MenuItem
 * @description
 * Represents a single navigation item within the application's header or sidebar.
 * Uses `NavLink` from **React Router** to provide built-in active route styling.
 * 
 * @param {IMenuOption} option - The menu option containing the navigation label and path.
 * 
 * @remarks
 * - The component automatically adds the `"active-route"` class when the link matches the current route.
 * - The base style for each menu item is defined in `styles.item` (CSS module).
 * - Ideal for dynamic menu rendering via `.map()` from a list of routes.
 */
const MenuItem = (option: IMenuOption) => {
  return (
    <li>
      <NavLink
        to={option.path}
        className={({ isActive }) =>
          `${styles.item} ${isActive ? "active-route" : ""}`
        }
      >
        {option.label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
