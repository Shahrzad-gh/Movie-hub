import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailer } from "../redux/actions/index";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#1D3557",
    width: "100%",
  },
  responsiveIframe: {
    position: "relative",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  details: {
    position: "absolute",
  },
  video: {
    width: " 60vw",
    height: "60vh",
  },
}));

function Details(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const details = props.location.state && props.location.state.data;
  const search = useSelector((state) => state.search);
  const id = details && props.location.state.data.id;

  useEffect(() => {
    const payload = {
      params: {
        id,
      },
    };
    dispatch(fetchTrailer(payload));
  }, []);

  const content =
    props.location.state === undefined ? (
      <Redirect to="/404" />
    ) : (
      <div className={classes.root}>
        <div className={classes.responsiveIframe}>
          <iframe
            className={classes.video}
            src={`https://www.youtube-nocookie.com/embed/${search.videoDetails.key}`}
          />
        </div>
        <div>
          <p>Details</p>
          <br />
          <p>Title : {details.title}</p>
        </div>
      </div>
    );

  return <div>{content}</div>;
}

export default Details;
