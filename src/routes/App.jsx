import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "../assets/styles/App.scss";
import Champions from "../containers/Champions";
import Favorites from "../containers/Favorites";
import Layout from "../components/Layout";
// import Loader from "../components/Loader";

// const Favorites = lazy( () => import("../containers/Favorites"));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/" component={Champions} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
