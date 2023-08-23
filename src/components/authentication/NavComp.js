import React from "react";
import {RegisterComp} from "./RegisterComp";
import {LoginComp} from "./LoginComp";
import logoImg from "../../assets/logo.png";

export const NavComp = () => {
  return (
    <nav className="container navbar sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logoImg} alt="logo" height="75" />
        </div>
        <div className="d-flex">
          <div className="col">
            <LoginComp/>
            <RegisterComp />
          </div>
        </div>
      </div>
    </nav>
  );
};

