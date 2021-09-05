import { Card, CardContent, CardMedia } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCastInfo } from "../redux/actions/index";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardStyle: {
    display: "inline-flex",
    border: " 1px solid rgb(27 127 204 / 80%)",
  },
}));
function CastInfo(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = props.data;
  const search = useSelector((state) => state.search);
  const info = search.people[id];

  useEffect(() => {
    const payload = {
      params: {
        id,
      },
    };
    dispatch(fetchCastInfo(payload));
  }, [dispatch, id]);

  return (
    <div>
      <Card className={classes.cardStyle}>
        <CardMedia
          style={{ width: 100, height: 130 }}
          component="img"
          src={info && `https://image.tmdb.org/t/p/w500${info.profile_path}`}
          //alt={info.name}
        />
        <CardContent>{info && info.name}</CardContent>
      </Card>
    </div>
  );
}

export default CastInfo;
