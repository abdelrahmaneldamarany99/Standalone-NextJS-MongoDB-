import { log } from "console";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Seller = ({
  params,
}: {
  params: { productId:string,seller: string };
}) => {
  log("params", params);
  if (parseInt(params.seller) > 2020) {
    notFound()
  }
  return (
    <>
      <div>Seller details</div>
      <h1 className="text-blue-500">I'm blue!</h1>
      
    </>
  );
};

export default Seller;
