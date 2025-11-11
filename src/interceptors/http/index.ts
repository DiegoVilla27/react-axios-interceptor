import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

/**
 * Intercepts and modifies outgoing Axios requests before they are sent.
 * 
 * - Skips modification for asset requests or if an Authorization header is already present.
 * - If a JWT token exists in `localStorage`, attaches it as a Bearer token in the Authorization header.
 *
 * @param {InternalAxiosRequestConfig} req - The Axios request configuration.
 * @returns {InternalAxiosRequestConfig} The modified request configuration.
 */
const onRequest = (
  req: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (req.url?.includes("assets") || req.headers?.Authorization) return req;

  // Add token to header if exists in local storage
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
};

/**
 * Handles request errors that occur before the request is sent.
 *
 * @param {AxiosError} error - The Axios error object.
 * @returns {Promise<AxiosError>} A rejected promise with the error.
 */
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

/**
 * Intercepts successful Axios responses before they are returned to the caller.
 *
 * @param {AxiosResponse} response - The Axios response object.
 * @returns {AxiosResponse} The unmodified Axios response.
 */
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

/**
 * Handles and categorizes Axios response errors.
 * 
 * - Logs detailed messages for specific HTTP status codes.
 * - Clears the token and dispatches a `"unauthorized"` event if a `401` is detected.
 * - Provides centralized error management for network and server issues.
 *
 * @param {AxiosError} error - The Axios error object.
 * @returns {Promise<AxiosError>} A rejected promise with the error.
 */
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    const status = error.response.status;
    switch (status) {
      case 401:
        console.warn("🔒 Unauthorized - Token may be invalid or expired.");
        // Optionally handle token refresh or logout logic
        localStorage.removeItem("token");
        window.dispatchEvent(new Event("unauthorized")); // centralized listener
        break;
      case 403:
        console.warn("🚫 Forbidden - Access denied.");
        break;
      case 500:
      case 502:
      case 503:
      case 504:
        console.error("💥 Server Error - Please try again later.");
        break;
      default:
        console.error(`❗ Unexpected Error [${status}]`, error.response.data);
    }
  } else {
    console.error("No server response error", error);
    console.error(
      "The connection to the server could not be established. Please check your connection."
    );
  }
  return Promise.reject(error);
};

/**
 * Sets up all Axios interceptors for a given Axios instance.
 * 
 * - Registers request and response interceptors for centralized request handling.
 * - Returns the same Axios instance with interceptors attached.
 *
 * @param {AxiosInstance} axios - The Axios instance to which interceptors are applied.
 * @returns {AxiosInstance} The Axios instance with configured interceptors.
 *
 */
export function setupInterceptorsTo(axios: AxiosInstance): AxiosInstance {
  axios.interceptors.request.use(onRequest, onRequestError);
  axios.interceptors.response.use(onResponse, onResponseError);
  return axios;
}