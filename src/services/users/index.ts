import { httpClient } from "@/utils/http";
import ENVIRONMENTS from "@/environments";
import type { IUserEntity } from "./entities";
import mappingUsers from "./mappers";
import type { IUserModel } from "./models";

/**
 * @function getUsers
 * @description
 * Fetches a list of users from the API and maps them to the application's user entity format.
 * Handles optional request cancellation via an AbortSignal and throws an error if the request fails.
 *
 * @param {AbortSignal} [signal] - Optional AbortSignal to cancel the HTTP request.
 * @returns {Promise<IUserEntity[]>} Promise that resolves to an array of mapped user entities.
 *
 */
export async function getUsers(signal?: AbortSignal): Promise<IUserEntity[]> {
  try {
    const data = await httpClient.get<IUserModel[]>(`${ENVIRONMENTS.apiUrl}/users`, signal);
    return mappingUsers(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}
