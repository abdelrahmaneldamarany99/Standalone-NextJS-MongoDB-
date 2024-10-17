// "use client"

import React from "react";
// import { clientFunction } from '@/app/_lib/clientFunction';
import ClientComponent from "../clientcomponent/page";
// import fs from "fs"

const ServerComponent = () => {
  // fs.readFileSync("./page.tsx","utf-8")
  console.log("Server Component");
  // clientFunction();

  return (
    <>
      <div>Server Component</div>
      <ClientComponent />
    </>
  );
};

export default ServerComponent;
