import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import poster from "../poster.jpg"
import Navbar from '../components/Navbar';
const useStyles = makeStyles(()=> ({
  root: {
    display: 'block',
    height : '100vh',
    overflow: 'hidden',
  },
  posterStyle:{
    width: '100%',
    background: 'linear-gradient(rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))'
  }
}));

function Header() {
  const classes = useStyles()
  // handleRandomImage = () => {
  //   return src
  // }
  return (
    <>
    <Navbar />
    <div className={classes.root}>
      <img alt="poster" src={poster} className={classes.posterStyle}/>
    </div>
    </>
  )
}

export default Header
