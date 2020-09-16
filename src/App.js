import React from 'react';
import './App.css';
import Post from './Components/Posts/Post';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Post></Post>
          </Route>
          <Route path="/posts/:paramId">
            <PostDetail />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
