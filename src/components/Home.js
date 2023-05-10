import React from "react";
// import { Link } from "react-router-dom";

import Carou from "./Carou";
import Popular from "./Popular";
// import Spinnn from "./Spinnn";

const Home = () => {

  return (
    <>
   <Carou />
   <Popular com="popular"  />
   <Popular com="top_rated"/>
   <Popular com="upcoming" />
   <Popular com="now_playing" />
    </>
  );
};

export default Home;
