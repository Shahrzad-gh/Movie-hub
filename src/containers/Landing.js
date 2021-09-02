import React, { useEffect } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import PopularMovies from "./PopularMovies";
import PopularTvs from "./PopularTvs";
import Header from "./Header";
import Trendings from "./Trendings";
import { fetchGenres } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Genre from "./Genre";

function Landing() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <PopularMovies />
      <PopularTvs />
      <Trendings />
      {search.genres &&
        search.genres.map((item) => <Genre key={item.id} data={item} />)}
    </div>
  );
}

export default Landing;
