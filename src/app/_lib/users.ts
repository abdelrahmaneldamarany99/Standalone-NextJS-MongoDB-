"use server"

export const getUsers = async () => {
    try {
      // const usersCookies = cookies();
      // const theme = usersCookies.get("theme");
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/user"
        // {
        //   cache: "no-store",
        // }
      );
      // const users = await res.json();
      // console.log("users", users);
      // return users;
      return res.json();
    } catch (error) {
      throw new Error(`Something Went Wrong`);
    }
  };
  