import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import PopularMovies from "./PopularMovies"
import PopularTvs from './PopularTvs'
import Header from "./Header"

function Landing() {
 return (
   <div>
     <Header/>
  <PopularMovies />
  <PopularTvs />
  </div>
 )
}

export default Landing
