
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import appimage from "./images/appimage.jpg";


import Posts from './components/Posts/Posts';

import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.jpg';
import memories1 from './images/memories1.jpg';
import Form from './components/Form/Form';
const Homepage = () => {
   const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg"
    class="bg_image"
        style={{
          backgroundImage: 'url('+appimage+')',
          backgroundSize: "cover",
          height: "128vh",
          color: "#f5f5f5"
        }}
    >
      {/* <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={memories1} alt="icon" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar> */}

        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      
    </Container>
  );
};

export default Homepage;
 {/* </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid> */}