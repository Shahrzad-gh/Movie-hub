import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { fetchPopularTv } from "../redux/actions/index";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    //display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#1D3557",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    "&:hover $img": {
      opacity: "0.5",
    },
  },
  title: {
    color: "#a8dadc",
  },
  titleBar: {
    background:
      "linear-gradient(to top, #3f51b5 0%, #1d355761 70%, #a8dadc05 100%)",
  },
  listIcon: {
    color: "#A8DADC",
  },
  textStyle: {
    color: "white",
    fontFamily: "Noto Sans JP",
    textAlign: "left",
    paddingLeft: "5px",
  },
  scroll: {
    flexWrap: "nowrap",
    width: "100%",
    height: "auto",
    overflow: "auto",
    outline: "none",
    overflowY: "hidden",
    paddingBottom: "15px",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  horizonMenu: {
    display: "flex",
    alignItems: "center",
  },
  iconStyle: {
    color: "#A8DADC",
  },
}));

function PopularTvs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScrollToLeft = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === search.movies.length ? 0 : currentSlide + 1;
    });
  };

  const handleScrollToRight = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? search.movies.length - 1 : currentSlide - 1;
    });
  };

  useEffect(() => {
    dispatch(fetchPopularTv());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div>
        <p className={classes.textStyle}>{"Tvs"}</p>
        <div className={classes.horizonMenu}>
          <div>
            <ChevronLeftIcon
              className={classes.iconStyle}
              onClick={handleScrollToLeft}
            />
          </div>
          <ImageList className={classes.scroll} cols={6.5}>
            {search.tvs &&
              search.tvs.map((item) => (
                <ImageListItem key={item.id}>
                  <div>
                    <Link
                      to={{
                        pathname: `/Details/${item.id}`,
                        state: { data: item },
                      }}
                    >
                      <img
                        alt={item.name}
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      />
                      <ImageListItemBar
                        title={item.name}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                        actionIcon={
                          <IconButton aria-label={`star ${item.name}`}>
                            <StarBorderIcon className={classes.title} />
                          </IconButton>
                        }
                      />
                    </Link>
                  </div>
                </ImageListItem>
              ))}
          </ImageList>
          <div>
            <ChevronRightIcon
              className={classes.iconStyle}
              onClick={handleScrollToRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularTvs;
