import { useEffect, useState } from "react";
import { useHttp } from "@/hooks/http";
import { getUsers } from "@/services/users";
import type { IUserEntity } from "@/services/users/entities";

/**
 * @hook useHomeScreen
 * @description
 * Custom hook that manages the logic for the Home screen.
 * 
 * This hook handles the retrieval of user data, including:
 * - Fetching users from the backend.
 * - Managing loading and error states.
 * - Providing a function to reload users manually.
 *
 */
export function useHomeScreen() {
  /** Stores the list of users retrieved from the API. */
  const [users, setUsers] = useState<IUserEntity[]>([]);

  /** Hook providing HTTP handling (loading, error, callEndpoint, etc.). */
  const { callEndpoint, loading, error, reset } = useHttp<IUserEntity[]>();

  /**
   * Loads the users from the backend service.
   *
   * Uses `callEndpoint` from the `useHttp` hook to perform
   * the request and updates the local `users` state with the result.
   *
   * @async
   * @function
   * @returns {Promise<void>} A promise that resolves when users are loaded.
   */
  const loadUsers = async (): Promise<void> => {
    const result = await callEndpoint(getUsers);
    if (result) setUsers(result);
  };

  /**
   * Executes `loadUsers` when the hook mounts and resets
   * any HTTP-related states when it unmounts.
   */
  useEffect(() => {
    loadUsers();
    return () => reset(); // cleans up HTTP states when component unmounts
  }, []);

  return {
    users,
    loading,
    error,
    reload: loadUsers,
  };
}

export default useHomeScreen;
