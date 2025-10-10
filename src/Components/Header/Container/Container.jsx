import React, { Children } from "react";

const Container = (props) => {
  return (
    <div className="container mx-auto lg:p-2 p-2 md:p-5">{props.children}</div>
  );
};

export default Container;
