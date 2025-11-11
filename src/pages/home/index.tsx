import InfoItem from "./components/information";
import UserItem from "./components/user";
import useHomeScreen from "./hooks";
import "./styles.css";

/**
 * @component HomeScreen
 * @description
 * Displays a list of users in a responsive table.
 * Handles loading and empty states with reusable UI components.
 * 
 * @remarks
 * Uses the `useHomeScreen` hook to fetch users from the API.
 * Renders `UserItem` components for each user or `InfoItem` messages
 * when there is no data or while loading.
 */
function HomeScreen() {

  const { users, loading } = useHomeScreen();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          !loading
            ? (users.length > 0)
              ? users.map((user) => (
                  <UserItem key={user.id} user={user} />
                ))
              : (
                  <InfoItem title="Users not found." />
                )
            : (
                <InfoItem title="Loading..." />
              )
        }
      </tbody>
    </table>
  );
}

export default HomeScreen;