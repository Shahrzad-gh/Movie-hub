import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "20vh",
    padding: "25px",
    textAlign: "left",
    backgroundColor: "#0f1b2d",
    color: "#4695ab",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {"This is a movie information App by Shahrzad-gh"}
      <br />
      <a href="https://github.com/shahrzad-gh">Shahrzad-gh/Movie-hub</a>
    </div>
  );
}

export default Footer;
