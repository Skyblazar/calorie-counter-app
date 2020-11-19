import React, { useContext } from "react";
import { NavBar } from "../../organisms";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Blog, Login, Signup } from "../../pages";

interface Pagecontain {
  width: number;
}

export const Pagecontainer = styled.div`
  overflow: scroll;
  margin-left: ${({ width }: Pagecontain) => (width > 1100 ? "25%" : "300px")};
  height: 100vh;
  min-height: 700px;
`;

export const Loggedout = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </>
  );
};
