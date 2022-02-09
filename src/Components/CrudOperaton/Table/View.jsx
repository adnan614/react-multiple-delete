import React from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  // alert(id);
  return <h1>View mama{id}</h1>;
};

export default View;
