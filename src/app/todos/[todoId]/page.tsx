"use client"

import { usePathname } from "next/navigation";
import React from "react";

const Todo = ({ params }: { params: { todoId: string } }) => {
  const pathName = usePathname();
  console.log(pathName);

  return <div>Todo {params.todoId}</div>;
};

export default Todo;
