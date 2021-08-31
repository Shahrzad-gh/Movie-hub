import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailer } from "../redux/actions/index";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#1D3557",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "40%",
  },
  responsiveIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
}));

function Details(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const details = props.location.state.data;
  const search = useSelector((state) => state.search);
  const id = props.location.state.data.id;

  useEffect(() => {
    const payload = {
      params: {
        id,
      },
    };
    dispatch(fetchTrailer(payload));
  }, []);

  return (
    <>
      <div className={classes.root}>
        <iframe
          className={classes.responsiveIframe}
          src={`https://www.youtube.com/embed/${search.videoDetails.key}`}
        />
      </div>
      <div>Details</div>
      <p>Title : {details.title}</p>
    </>
  );
}

export default Details;
