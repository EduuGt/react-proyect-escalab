import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "../assets/styles/App.scss";
import Champions from "../containers/Champions";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

const Favorites = lazy(() => import("../containers/Favorites"));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/" component={Champions} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
