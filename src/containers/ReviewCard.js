import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    border: "1px solid #a8dadc",
    padding: "10px",
    width: "50vw",
    margin: "5px",
    fontSize: "small",
    justifyContent: "center",
    alignItems: "center",
  },
  rateStyle: {
    color: "white",
    backgroundColor: "green",
    borderRadius: "25px",
  },
}));

function ReviewCard(props) {
  const classes = useStyles();

  const { data } = props;
  console.log(data);
  return (
    <div className={classes.root}>
      <div>
        {data.author}
        <div className={classes.rateStyle}>
          <StarIcon />
          {data.author_details.rating}
        </div>
      </div>
      <div>{data.content}</div>
    </div>
  );
}

export default ReviewCard;
