import type { IUserEntity } from "../entities";
import type { IUserModel } from "../models";

/**
 * @function mappingUsers
 * @description
 * Maps an array of raw user models (`IUserModel`) to the application user entity format (`IUserEntity`).
 * Converts the `id` to a string and keeps the basic contact properties (name, email, phone).
 *
 * @param {IUserModel[]} usersRaw - Array of raw user models fetched from an API or database.
 * @returns {IUserEntity[]} Array of mapped user entities compatible with the app domain.
 *
 */
const mappingUsers = (usersRaw: IUserModel[]): IUserEntity[] => {
  const usersMap: IUserEntity[] = usersRaw.map((user) => {
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      phone: user.phone
    }
  });

  return usersMap;
}

export default mappingUsers;
