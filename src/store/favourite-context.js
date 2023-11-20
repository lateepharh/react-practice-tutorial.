import { createContext,useState } from "react";
//creteContext takes an argument:which is the initial value(could be an object) for that component 
const FavouritesContex = createContext({
    favorites:[],
    totalFavourites:0,
    addFavourte:(favouriteMeetup)=>{},
    removeFavourite:(meetupid)=>{},
    itemFavourite:(meetupid)=>{}
});
// this component below has the job of providing the above context to all the component that are intrested in its value and also reponsible for updating context values
export function FavouritesContexProvider (props){
    const [userFavourite,setUserFavourit] = useState([])
   
    function addFavouriteHandler(favouriteMeetup){
        setUserFavourit((prevuserFavourites)=>{
            return(
                prevuserFavourites.concat(favouriteMeetup)
            );
        });
    };
    function removeFavoriteHandler(meetupid){
        //identify the meetup thatshould be removed
        setUserFavourit(prevuserFavourites=>{
            return(
                prevuserFavourites.filter((meetup)=>{
                    return meetup.id !== meetupid
                })
                //filter returns any element in the array that meetup with the condition of the callback function
            );
        });
    };
    function itemIsFavouriteHandler(meetupid){
        // this function will help detect if an item is favourite or not
        //some method detrmined whether the callback function return true for any elemnt in the array
        return(
            userFavourite.some((meetup)=>{
                return meetup.id === meetupid
            })
        )
    };

    const context = {
        favorites:userFavourite,
        totalFavourites: userFavourite.length,
        addFavourte: addFavouriteHandler,
        removeFavourite:removeFavoriteHandler,
        itemFavourite: itemIsFavouriteHandler
    };
    return(
        //.provider is a component FavouritesContext has built-in
        <FavouritesContex.Provider value={context}>{props.children}</FavouritesContex.Provider>
    );
};
export default FavouritesContex;