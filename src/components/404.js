import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#1D3557",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    color: "#a8dadc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typography: {
    fontFamily: "Noto Sans JP",
    fontSize: 50,
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.typography}>
        404 <br /> Something Wents Wrong, Page Not Found
      </p>
    </div>
  );
}

export default NotFound;
