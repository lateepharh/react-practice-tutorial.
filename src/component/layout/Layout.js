import React from 'react';
import  Class from "./layout.module.css";
import MainNavigation from "../MainNavigation";

const Layout = (props) => {
  return (
    <div>
        <MainNavigation></MainNavigation>
        <main className={Class.main}>
            {props.children}
        </main>
    </div>
  );
};

export default Layout