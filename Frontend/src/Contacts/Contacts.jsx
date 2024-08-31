import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Foooter from "../Components/Foooter";

function Contacts() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">

        <Contact />
      </div>
      <Foooter />
    </>
  );
}

export default Contacts;
