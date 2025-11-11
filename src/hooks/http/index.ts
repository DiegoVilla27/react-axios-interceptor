import { useCallback, useEffect, useRef, useState } from "react";

/**
 * @hook useHttp
 * @description
 * A reusable and type-safe custom React hook for managing asynchronous HTTP requests.
 * 
 * It provides built-in state management for:
 * - `data`: the resolved response payload.
 * - `loading`: indicates when a request is in progress.
 * - `error`: holds any error message from failed requests.
 * 
 * Supports **automatic request cancellation** using the `AbortController` API to prevent
 * memory leaks or race conditions when components unmount or when multiple requests overlap.
 * 
 * @template T - The expected type of the response data.
 * 
 */
export function useHttp<T>() {
  /** Holds the last successfully resolved response data. */
  const [data, setData] = useState<T | null>(null);

  /** Indicates whether a request is currently being processed. */
  const [loading, setLoading] = useState<boolean>(false);

  /** Contains any error message resulting from failed requests. */
  const [error, setError] = useState<string | null>(null);

  /** Reference to an active AbortController for request cancellation. */
  const controllerRef = useRef<AbortController | null>(null);

  /**
   * Executes an asynchronous HTTP request, handling loading, success, and error states.
   * Automatically cancels any previous pending request to avoid overlapping calls.
   * 
   * @param requestFn - A function that performs the HTTP request. It receives an `AbortSignal` and returns a Promise of type `T`.
   * @returns A Promise resolving to the result of type `T`, or `undefined` if aborted or failed.
   */
  const callEndpoint = useCallback(async (
    requestFn: (signal: AbortSignal) => Promise<T>
  ): Promise<T | undefined> => {

    // Abort any previous ongoing request before starting a new one
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const result = await requestFn(controller.signal);
      setData(result);
      return result;
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") {
        console.warn("⚠️ Request was aborted.");
      } else {
        const message = err instanceof Error ? err.message : "Unknown error occurred";
        setError(message);
        console.error("❌ HTTP Request Error:", message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Resets the `data` and `error` states manually.
   * Useful when you need to clear the last response before a new request.
   */
  const reset = useCallback((): void => {
    setData(null);
    setError(null);
  }, []);

  /** Automatically aborts any pending requests when the component unmounts. */
  useEffect(() => {
    return () => controllerRef.current?.abort();
  }, []);

  return {
    callEndpoint,
    data,
    loading,
    error,
    reset,
  };
}