"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <div>{error.message}</div>
      <button className="bg-gray-200" onClick={reset}>
        Try Again
      </button>
    </>
  );
};

export default Error;
