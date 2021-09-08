import React, { useEffect } from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailer, fetchCredits } from "../redux/actions/index";
import { Redirect } from "react-router-dom";
import CastInfo from "./CastInfo";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Reviews from "./Reviews";

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
    padding: "15px",
    backgroundColor: "#0f1b2d",
  },
  video: {
    width: " 60vw",
    height: "60vh",
  },
  castList: {
    display: "flex",
  },
  casts: {
    margin: "10px",
  },
  posterStyle: {
    border: "1px solid rgb(27 127 204 / 80%)",
    width: "600",
    height: "auto",
  },
  informationStyle: {
    display: "block",
    padding: "15px",
    color: "#a8dadc",
    textAlign: "left",
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
        cat: details.media_type ? details.media_type : "movie",
      },
    };
    dispatch(fetchTrailer(payload));
    dispatch(fetchCredits(payload));
  }, [dispatch, id, details.media_type]);

  const content =
    props.location.state === undefined ? (
      <Redirect to="/404" />
    ) : (
      <div className={classes.root}>
        <div className={classes.responsiveIframe}>
          <iframe
            className={classes.video}
            src={`https://www.youtube-nocookie.com/embed/${search.videoDetails.key}`}
            title={details.title}
          />
        </div>
        <div className={classes.details}>
          <div>
            <CardMedia
              className={classes.posterStyle}
              component="img"
              src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
              title={details.title}
            />
          </div>
          <div className={classes.informationStyle}>
            <p>
              <b>Details</b>
            </p>
            <p>Title : {details.title}</p>
            <p> Director : </p>
            <div>
              <p>User Score</p>
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={details.vote_average * 10}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="inherit">
                    {details.vote_average * 10}%
                  </Typography>
                </Box>
              </Box>
            </div>
            <div>
              <p>Plot:</p>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
        <div className={classes.castList}>
          {search.credits.cast &&
            search.credits.cast.slice(0, 5).map((item) => (
              <div key={item.id} className={classes.casts}>
                <CastInfo data={item} />
              </div>
            ))}
        </div>
        <div>
          <Reviews data={details.id} />
        </div>
      </div>
    );

  return <div>{content}</div>;
}

export default Details;
