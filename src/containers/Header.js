import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import poster from "../poster.jpg";
//import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    overflow: "hidden",
    background: "linear-gradient( #1d3557, #61dafb, #1d3557) ",
  },
  posterStyle: {
    width: "auto",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <img
          alt="poster"
          //src={`https://image.tmdb.org/t/p/w500${search.movies[${handleRandomImage}].pa}`}
          className={classes.posterStyle}
        />
      </div>
    </>
  );
}

export default Header;
