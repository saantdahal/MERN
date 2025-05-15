import React from "react";
import { useParams } from "react-router";

const LearnDynamicRoutes = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}</div>;
};

export default LearnDynamicRoutes;
