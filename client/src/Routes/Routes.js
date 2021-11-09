import React, { lazy, Suspense } from "react";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";
const ChatComponent = lazy(() => import("../containers/Chat/Chat"));
const JoinPageComponent = lazy(() => import("../containers/JoinPage/JoinPage"));

export const Routes = () => (
  <BrowserRouter basename="/">
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={JoinPageComponent} />
        <Route exact path="/chat" component={ChatComponent} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
