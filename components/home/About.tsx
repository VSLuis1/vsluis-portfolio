import React from "react";
import SectionTitle from "../global/SectionTitle";

function About() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="About me" />
      
      <h2 className="text-center p-2 font-bold text-green-400">It's VSLuis.</h2>
      <p className="text-center mt-2">Frontend developer with experience in designing and developing user-friendly and efficient web applications.<br/> Skilled in frontend technologies including HTML, CSS, JavaScript, and frameworks such as React and Next.JS. </p>
      </div>
  );
}

export default About;
