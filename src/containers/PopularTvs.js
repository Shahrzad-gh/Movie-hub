import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { fetchPopularTv } from "../redux/actions/index"

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

function PopularTvs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const search = useSelector(state => state.search)

  useEffect(() => {
    dispatch(fetchPopularTv())
  }, [])

  console.log(search.popular)

  return (
    <div className={classes.root}>
      <div>

      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={6.5}>
        {search.popular.tvs && search.popular.tvs.map((item) => (
          <ImageListItem className={classes.scroll} key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
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
        ))} 
      </ImageList>
      <span className={classes.listIcon}>
          <ChevronRightIcon />
        </span>
    </div>

      </div>
    </div>
  )
}

export default PopularTvs
