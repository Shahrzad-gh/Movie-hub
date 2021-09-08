import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../redux/actions";
import ReviewCard from "./ReviewCard";

function Reviews(props) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    const payload = {
      params: {
        id: props.data,
      },
    };
    dispatch(fetchReviews(payload));
  }, []);
  return (
    <div>
      {search.reviews.slice(0, 2).map((item) => (
        <ReviewCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Reviews;
