import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import poster from "../poster.jpg";
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
  // handleRandomImage = () => {
  //   return src
  // }
  return (
    <>
      <div className={classes.root}>
        <img alt="poster" src={poster} className={classes.posterStyle} />
      </div>
    </>
  );
}

export default Header;
