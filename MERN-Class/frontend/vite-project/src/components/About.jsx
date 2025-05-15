import React, { use } from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      This is about us page This is about us page
      <div>
        <button
          onClick={() => {
            navigate("/contact", { replace: true });
          }}
          style={{
            cursor: "pointer",
          }}
        >
          Go to contact Page
        </button>
      </div>
    </div>
  );
};

export default About;
