import React from 'react'
import { useContext } from 'react'
import FavouritesContex from '../store/favourite-context';
import { MeetUpList } from './AllMeetups';

const Favorites = () => {
  const favouriteCtx = useContext(FavouritesContex)
  let content;
  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You have no favourite meetups. Sart adding Some?</p>
  }else{
      content = <MeetUpList meet={favouriteCtx.favorites}/>
  
  };
  return (
    <div>
      <h1>My Favourite Page</h1>
      {content}
    </div>
  );
};

export default Favorites