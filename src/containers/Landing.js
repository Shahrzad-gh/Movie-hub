import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import PopularMovies from "./PopularMovies";
import PopularTvs from "./PopularTvs";
import Header from "./Header";
import Trendings from "./Trendings";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div>
      <Header />
      <PopularMovies />
      <PopularTvs />
      <Trendings />
    </div>
  );
}

export default Landing;
