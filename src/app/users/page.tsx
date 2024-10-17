// import { cookies } from "next/headers";
import Link from "next/link";
import { getUsers } from "../_lib/users";

// const fetchCache = "default-cache";

type User = {
  id: number;
  name: string;
  email: string;
};

const Users = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1>hi Users</h1>
      {/* {console.log("users", users)} */}
      {users.map((user: User) => {
        <div key={user.id}>
          <Link href={`https://jsonplaceholder.typicode.com/users/${user.id}`}>
            user name : {user.name}
          </Link>
        </div>;
      })}
    </div>
  );
};

export default Users;
