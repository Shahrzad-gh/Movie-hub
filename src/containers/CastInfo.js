import { Card, CardContent, CardMedia } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCastInfo } from "../redux/actions/index";

function CastInfo(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = props.data;
  const search = useSelector((state) => state.search);
  const info = search.people[id];
  console.log(`info[${id}]`, info);

  useEffect(() => {
    const payload = {
      params: {
        id,
      },
    };
    dispatch(fetchCastInfo(payload));
  }, [dispatch]);

  return (
    <div>
      <Card>
        <CardMedia
          style={{ width: 70, height: 100 }}
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
