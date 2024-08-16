import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Biomedical Engineer",
          "Systems and Biomedical Engineering",
          "Computer Vision Enthusiast",
          "Web Developer",
          "Embedded Systems Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
