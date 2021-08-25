import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import PopularMovies from "./PopularMovies"
import PopularTvs from './PopularTvs'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: "#1D3557"
//     },
//   imageList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
//   listIcon:{
//     color: '#A8DADC'
//   }
// }));

function Landing() {
 return (
   <div>
  <PopularMovies />
  <PopularTvs />
  </div>
 )
}

export default Landing
