import React from "react";
import { useSearchParams } from "react-router";

const LearnQueryParams = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  return <div>LearnQueryParams {searchParams.get("name")}</div>;
};

export default LearnQueryParams;
