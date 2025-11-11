/**
 * @interface IUserEntity
 * @description
 * Represents a user entity with basic contact information.
 *
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - Full name of the user.
 * @property {string} email - Email address of the user.
 * @property {string} phone - Phone number of the user.
 */
export interface IUserEntity {
  id: string;
  name: string;
  email: string;
  phone: string;
}
