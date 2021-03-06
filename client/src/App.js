import {
  Container,
  Grow,
  Grid,
} from "@material-ui/core";
import Posts from "./components/Posts/Posts.js";
import Post from "./components/Posts/Post/Post.js";
import Form from "./components/Form/Form.js";
import Navbar from "./components/Navbar/Navbar.js";
import useStyles from "./styles";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetails from './components/Posts/PostDetails/PostDetails.js';

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Router>
      <Navbar />
      <Grow in>
        <Switch>
          <Container>
            <Grid container justify="center" alignItems="stretch">
              <Route exact path="/">
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Route>
              <Route exact path="/dashboard">
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
              </Route>
              <Route exact path="/details/:id">
                <Grid item xs={12} sm={7}>
                  <PostDetails />
                </Grid>
              </Route>
            </Grid>
          </Container>
        </Switch>
      </Grow>
    </Router>
  );
};

export default App;
