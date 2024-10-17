import { log } from "console";
import { notFound } from "next/navigation";
import React from "react";

const blogDetails = ({ params }: { params: { segments: string[] } }) => {
  log("blog-params", params);
  // if ((params.segments?.length) > 4) {
  //   notFound()
  // }
  return (
    <>
      {/* {(params.segments?.length) > 4 && notFound()} */}
      {params.segments?.length &&
        params.segments?.map((segment: string, i: number) => (
          <div key={i}>
            The {i + 1}
            <sub>th</sub> route is /{segment}
          </div>
        ))}
      <h1>blogDetails</h1>
    </>
  );
};
export default blogDetails;
