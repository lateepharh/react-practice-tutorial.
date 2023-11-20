import { useState, useEffect,useContext } from "react";
import FavouritesContex from "../store/favourite-context";
import { Link } from "react-router-dom";
// import eyo from "./pictures/Eyo.jpg";
// import Beach from "./pictures/second meetup.jpg";
// import Lagos from "./pictures/First Meetup.jpg";
// import Benin from "./pictures/benin.jpg";
import Class from "./AllMeetups.module.css";
import Card from "../component/ui/Card";
//To load inputed newmeetup data from the database which we store data into our allmeetup we need to send http request:but when?(whenever thiscomponent is render)
//useEffect (effect function, an array of dependecies(add all external values effect function relies on)) hook allows us to run code under certain condions: we are using this hook here because the fetch function below runs always when the component function runs with useEffect we will restrict it and define some conditions to wher it should run
// const DummyData = [
//    {
//         id: "Meet 1",
//        title: " Indigenous Eyo Festival ",
//        image: eyo,
//         address: " Lagos, Nigeria",
//        description:"This is a First amazing meetup ehich you defintely should not miss!!!"
//     },
//    {
//       id: "Meet 2",
//      title: " Badagry Bar Beach",
//         image: Beach,
//         address: " Lagos, Nigeria",
//         description:"This is a First amazing meetup ehich you defintely should not miss!!!"
//     },
//     {
//         id: "Meet 3",
//        title: " Indigenous Eyo Festival ",
//        image: Lagos,
//        address: " Lagos, Nigeria",
//        description:"This is a First amazing meetup ehich you defintely should not miss!!!"
//     },
//     {
//         id: "Meet 4",
//         title: " Indigenous Eyo Festival ",
//         img: Benin,
//         address: " Benin, Nigeria",
//         description:"This is a First amazing meetup ehich you defintely should not miss!!!"
//     }

// ];
function AllMeetupPage (props){
    // we are using the same url that we use to store data to fetch data as below:We are gettin data here
    // we are using usestate to bring change when we get respone data from the database instedof async which returns a promise: and we give a first state ,this state manages loading state(true) and set to false when we have the data
    //the secondstate  will be an array of meetups where we store our fetch data
    const [isLoading, setIsLoading] =useState(true);
    const [loadedMeetups, setLoadedmeetups]= useState([]);
    useEffect(()=>{
        setIsLoading(true)
        fetch(     
        'https://react-app-practice-9c5be-default-rtdb.firebaseio.com/meetups.json').then((response) =>{
            return response.json();
        }).then((data) =>{
            const meetups =[];
            for (const key in data){
                const meet ={
                    id:key,
                    ...data[key]
                };
                meetups.push(meet)

            };
            // this setIsLoading state is false because we arent loading anymore
            setIsLoading(false)
            setLoadedmeetups(meetups)
        });
    
    }, []);
        if (isLoading) {
            return (
                <section>
                    <p>Loading.... </p>
                </section>
            )
        } ;
    return(
        <section >
            <h1>All MeetUps</h1>
            {
               ! loadedMeetups.length &&  <Link className={Class.link} to={"/newmeetup"}>Click here to add meetups</Link>
            }
            {/* {DummyData.map((data)=>{
                return(
                    <MeetUps key={data.id} {...data}></MeetUps>
                )
            })};  */}
            {/* instead of the above map iteration, we pass the loadedmeetups inside the Meetups component */}
            <MeetUpList meet={loadedMeetups}/> 
            
        </section>
    );
};
export const MeetUpList =(props)=>{
    return(
        <section>
            {props.meet.map((data)=>{
                return(
                    <MeetUps key={data.id} {...data} id={data.id} img={data.img} title={data.title} address={data.address} description={data.description}></MeetUps>
                )
            })}
        </section>
    )
}
const MeetUps= (props)=>{
    const {title, image,address, description} = props;
    console.log("this is my image ",image);
    const favouriteCtx= useContext(FavouritesContex)
     //useContext allows us to establish a connection btw this component and context
     const itemIsFavourite = favouriteCtx.itemFavourite(props.id)

    function toggleFavouriteHandler(){
        //we need data from the context in this function and find out whether the meetup item is part of the context: so we need to tap from thecontext using UseContext  
        if (itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id)
        }else{
            favouriteCtx.addFavourte({
                id:props.id,
                title:props.title,
                image: props.image,
                address:props.address,
                description:props.description
            })
        }
    }
    return(
        <div className={Class.item}>
            <Card>
              <div className={Class.image}>
                  <img src={image} alt="" />
               </div>
              <div className={Class.content}>
                   <h3>{title}</h3>
                   <address>{address}</address>
                   <p>{description}</p>
                </div>
               <div className={Class.actions}>
                   {/* <  button onClick={toggleFavouriteHandler}>To Favorite</button> do the bellow instead to add functionalityand dynamic */}
                   <  button onClick={toggleFavouriteHandler}>{itemIsFavourite ? "Remove from Favourite" : "To Favourite"}</button>
               </ div>
            </Card>
        </div>
    );
};

export default AllMeetupPage