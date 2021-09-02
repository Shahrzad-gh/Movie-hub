import React, { useEffect } from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailer, fetchCredits } from "../redux/actions/index";
import { Redirect } from "react-router-dom";
import CastInfo from "./CastInfo";

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
    display: "flex",
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
  console.log(search);
  useEffect(() => {
    const payload = {
      params: {
        id,
      },
    };
    dispatch(fetchTrailer(payload));
    dispatch(fetchCredits(payload));
  }, [dispatch]);

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
        <div className={classes.details}>
          <div>
            <CardMedia
              component="img"
              src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
              title={details.title}
            />
          </div>
          <div>
            <p>Details</p>
            <p>Title : {details.title}</p>
            <p> Director : </p>
          </div>
        </div>
        <div>
          <ul>
            {search.credits.cast &&
              search.credits.cast.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <CastInfo data={item} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    );

  return <div>{content}</div>;
}

export default Details;
