import React from 'react'
//instead of using the anchor tag <a>to navigate links and path which would be unideal while using react we use the link component as below
//N.B and to make link aware of the url it should navigate to we have to set the "to props" in the link component
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Class from "./MainNavigation.module.css"
import FavouritesContex from '../store/favourite-context';
//Building classes like this limits their scope to this component

const MainNavigation = () => {
    const favouriteCtx = useContext(FavouritesContex)
  return (
    <header className= {Class.header}>
        <div className={Class.logo}>React Meetups App</div>
        <nav className={Class.nav}>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/newmeetup">Add New Meetups</Link>
                </li>
                <li>
                  <Link to="/Favourite">Favourite Meetups <span className={Class.badge}>{favouriteCtx.totalFavourites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default MainNavigation