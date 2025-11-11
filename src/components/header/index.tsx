import MenuItem from "./components/item";
import useHeader from "./hooks";
import styles from "./styles.module.css";

/**
 * @component Header
 * @description
 * A functional React component that renders the main navigation header of the application.
 * 
 * This component is responsible for displaying the top navigation bar, which dynamically 
 * loads its menu options using the `useHeader` custom hook. Each menu item is rendered 
 * through the `MenuItem` component.
 * 
 * @remarks
 * - Utilizes scoped CSS modules for styling (`styles.header`, `styles.nav`, `styles.ul`).
 * - The component is stateless and relies on `useHeader()` for data.
 * - Designed for use within the main application layout.
 * 
 * @hook
 * @function useHeader
 * @description Custom hook used to provide navigation data for the header component.
 * @returns {{ menu: Array<{ label: string; path: string }> }} An object containing the menu options.
 * 
 */
const Header = () => {
  const { menu } = useHeader();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {menu.map((option) => (
            <MenuItem
              key={option.path}
              label={option.label}
              path={option.path}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
