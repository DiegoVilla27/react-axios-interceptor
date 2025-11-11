/**
 * @interface IUserModel
 * @description
 * Represents the raw user model fetched from an API or external source.
 * Includes detailed information such as address and company data.
 *
 * @property {number} id - Unique numeric identifier for the user.
 * @property {string} name - Full name of the user.
 * @property {string} username - Username or handle of the user.
 * @property {string} email - Email address of the user.
 * @property {IAddress} address - User's address details.
 * @property {string} phone - Phone number of the user.
 * @property {string} website - User's website URL.
 * @property {ICompany} company - User's company information.
 */
export interface IUserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

/**
 * @interface IAddress
 * @description
 * Represents the address structure of a user, including geographic coordinates.
 *
 * @property {string} street - Street name.
 * @property {string} suite - Suite or apartment number.
 * @property {string} city - City name.
 * @property {string} zipcode - Postal code.
 * @property {IGeo} geo - Geographic coordinates (latitude and longitude).
 */
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

/**
 * @interface IGeo
 * @description
 * Represents geographic coordinates.
 *
 * @property {string} lat - Latitude coordinate.
 * @property {string} lng - Longitude coordinate.
 */
export interface IGeo {
  lat: string;
  lng: string;
}

/**
 * @interface ICompany
 * @description
 * Represents the company information of a user.
 *
 * @property {string} name - Company name.
 * @property {string} catchPhrase - Company's catch phrase.
 * @property {string} bs - Company's business slogan or description.
 */
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
