import Link from "next/link";
import React from "react";

const Todos = () => {
  return (
    <>
      <Link href="/todos/1">Todo 1</Link>
      <br />
      <Link href="/todos/2">Todo 2</Link>
      <br />
      <Link href="/todos/3" replace>
        Todo 3
      </Link>
    </>
  );
};

export default Todos;
