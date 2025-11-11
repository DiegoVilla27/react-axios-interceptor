import type { IUserEntity } from "@/services/users/entities";

/**
 * Defines the props accepted by the `UserItem` component.
 *
 * @interface IProps
 * @property {IUserEntity} user - The user entity containing the details to display in the table row.
 */
interface IProps {
  user: IUserEntity;
}

/**
 * @component UserItem
 * @description
 * Functional component that renders a table row (`<tr>`) displaying user information.
 *
 * It displays the user's ID, name, email, and phone number in separate table cells.
 *
 * @param {IProps} props - The component props.
 * @param {IUserEntity} props.user - The user data to be displayed in the table row.
 */
const UserItem = ({ user }: IProps) => {
  return (
    <tr>
      <td scope="row">{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

export default UserItem;
