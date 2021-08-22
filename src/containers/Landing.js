import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { fetchPopular } from "../redux/actions/index"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#1D3557"
    },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  listIcon:{
    color: '#A8DADC'
  }
}));

function Landing() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(fetchPopular)
  }, [])

  return (
    <div className={classes.root}>
      <div>
      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {/* {movies.popular.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))} */}
      </ImageList>
    </div>
    <span className={classes.listIcon}>
          <ChevronRightIcon />
        </span>
      </div>
    </div>
  )
}

export default Landing
