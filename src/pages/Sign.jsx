import React, { useEffect } from "react";
import SignForm from "../sections/SignForm";

const Sign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <SignForm />
    </>
  );
};

export default Sign;
