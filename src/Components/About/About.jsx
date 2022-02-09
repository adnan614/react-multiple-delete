import React, { useState } from "react";
import PostOperation from "../CrudOperaton/PostOperation";
import GetOperation from "../CrudOperaton/GetOperation";

const About = () => {
  const [modal, setModal] = useState({
    message: "",
    isLoading:false
})

  return (
    <>
      {/* post operation */}
      <PostOperation />
      <GetOperation />
     
    </>
  );
};
export default About;
