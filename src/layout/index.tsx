import Footer from "@/components/footer";
import Header from "@/components/header";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

/**
 * Defines the props accepted by the {@link Layout} component.
 *
 * @interface ILayoutProps
 * @property {ReactNode} children - The main page content to be rendered within the layout.
 */
interface ILayoutProps {
  children: ReactNode;
}

/**
 * @component Layout
 * @description
 * Application layout component that provides a consistent structure
 * for all pages by including a header, main content area, and footer.
 *
 * This component is typically used as a wrapper around page-level components
 * to ensure a uniform layout across the application.
 *
 * @param {ILayoutProps} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed between the header and footer.
 */
const Layout = ({
  children
}: ILayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layoutMain}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
