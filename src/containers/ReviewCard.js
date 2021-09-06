import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    border: "1px solid #a8dadc",
    padding: "10px",
    width: "50vw",
    margin: "5px",
  },
}));

function ReviewCard(props) {
  const classes = useStyles();

  const { data } = props;
  return (
    <div className={classes.root}>
      <div>{data.author}</div>
      <div>{data.content}</div>
    </div>
  );
}

export default ReviewCard;
