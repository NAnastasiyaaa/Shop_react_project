import React from "react";
import Navbar from "./Navbar/Navbar";
import Description from "./Description/Description";
import InfFoto from "./ToDo/InfFoto";
import Button from "./ToDo/button";
import Footer from "./ToDo/footer";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Description />
      <InfFoto />
      <Button />
      <Footer />
    </div>
  );
}

export default Home;
