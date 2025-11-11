/**
 * @component ViteConfig
 * @description
 * Factory function that generates and exports the Vite configuration for the React project.
 * 
 * This configuration:
 * - Integrates React with the `@vitejs/plugin-react` plugin.
 * - Defines path aliases for cleaner and more maintainable imports.
 * - Configures CSS Modules naming behavior based on the build mode (development or production).
 * - Sets the local development server to run on port `3000`.
 * 
 * @remarks
 * - In **production mode**, CSS class names are hashed for optimization (`[hash:base64:8]`).
 * - In **development mode**, CSS class names preserve the local name for easier debugging (`[local]_[hash:base64:8]`).
 * - Uses `defineConfig` from Vite for better IDE support and type safety.
 * - The `@` alias maps to the root `src` directory for simplified imports.
 *
 * @param {ViteConfig} args - Object containing the build context.
 * @param {string} args.mode - Current build mode (`development` or `production`).
 * @param {string} args.command - The CLI command executed (`serve` or `build`).
 */
import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig } from 'vite';

type ViteConfig = {
  mode: string;
  command: string;
}

export default (args: ViteConfig) => {

  const generateScopedName: string = (args.mode === 'production') ? '[hash:base64:8]' : '[local]_[hash:base64:8]';

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@axios": path.resolve(__dirname, "./src/axios"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@environments": path.resolve(__dirname, "./src/environments"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@interceptors": path.resolve(__dirname, "./src/interceptors"),
        "@layout": path.resolve(__dirname, "./src/layout"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@router": path.resolve(__dirname, "./src/router"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@utils": path.resolve(__dirname, "./src/utils")
      }
    },
    css: {
      modules: {
        scopeBehaviour: 'local',
        generateScopedName,
        localsConvention: 'camelCase'
      }
    }
  })
};
