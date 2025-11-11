import axios from "axios";

/**
 * @constant httpClient
 * @description
 * A lightweight HTTP client wrapper for handling RESTful API requests.
 * Provides methods for GET, POST, PUT, PATCH, and DELETE requests, with optional AbortSignal support.
 */
export const httpClient = {
  /**
   * @function get
   * @template T
   * @description Performs an HTTP GET request.
   * @param {string} url - The endpoint URL to request.
   * @param {AbortSignal} [signal] - Optional signal to cancel the request.
   * @param {Record<string, any>} [params] - Optional query parameters.
   * @returns {Promise<T>} Resolves with the response data of type T.
   */
  get: async <T>(url: string, signal?: AbortSignal, params?: Record<string, any>): Promise<T> => {
    const response = await axios.get<T>(url, { params, signal });
    return response.data;
  },

  /**
   * @function post
   * @template T
   * @description Performs an HTTP POST request.
   * @param {string} url - The endpoint URL to request.
   * @param {any} [body] - Optional request payload.
   * @param {AbortSignal} [signal] - Optional signal to cancel the request.
   * @returns {Promise<T>} Resolves with the response data of type T.
   */
  post: async <T>(url: string, body?: any, signal?: AbortSignal): Promise<T> => {
    const response = await axios.post<T>(url, body, { signal });
    return response.data;
  },

  /**
   * @function put
   * @template T
   * @description Performs an HTTP PUT request.
   * @param {string} url - The endpoint URL to request.
   * @param {any} [body] - Optional request payload.
   * @param {AbortSignal} [signal] - Optional signal to cancel the request.
   * @returns {Promise<T>} Resolves with the response data of type T.
   */
  put: async <T>(url: string, body?: any, signal?: AbortSignal): Promise<T> => {
    const response = await axios.put<T>(url, body, { signal });
    return response.data;
  },

  /**
   * @function patch
   * @template T
   * @description Performs an HTTP PATCH request.
   * @param {string} url - The endpoint URL to request.
   * @param {any} [body] - Optional request payload.
   * @param {AbortSignal} [signal] - Optional signal to cancel the request.
   * @returns {Promise<T>} Resolves with the response data of type T.
   */
  patch: async <T>(url: string, body?: any, signal?: AbortSignal): Promise<T> => {
    const response = await axios.patch<T>(url, body, { signal });
    return response.data;
  },

  /**
   * @function delete
   * @template T
   * @description Performs an HTTP DELETE request.
   * @param {string} url - The endpoint URL to request.
   * @param {AbortSignal} [signal] - Optional signal to cancel the request.
   * @returns {Promise<T>} Resolves with the response data of type T.
   */
  delete: async <T>(url: string, signal?: AbortSignal): Promise<T> => {
    const response = await axios.delete<T>(url, { signal });
    return response.data;
  },
};
