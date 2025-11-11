/**
 * @module ENVIRONMENTS
 * @description
 * Centralized configuration module for accessing environment variables within the application.
 * 
 * This file serves as a single source of truth for environment-dependent constants,
 * improving maintainability and consistency across environments (e.g. development, staging, production).
 * 
 * Values are injected at build time through **Vite's `import.meta.env`** system.
 * 
 * @remarks
 * - Environment variables must be prefixed with `VITE_` to be exposed to client-side code.
 * - Example: define `VITE_API_URL=https://api.example.com` in your `.env` or `.env.production`.
 * - Accessed via `import.meta.env.VITE_API_URL`.
 * 
 * @constant
 * @property {string} apiUrl - The base URL for API requests, loaded from environment variables.
 */
const ENVIRONMENTS = {
  /** The base URL for the application's API, defined in the environment configuration. */
  apiUrl: import.meta.env.VITE_API_URL as string
};

export default ENVIRONMENTS;
