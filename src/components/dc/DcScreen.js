import React from "react";
import HeroList from "../hero/HeroList";

const DcScreen = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};

export default DcScreen;
