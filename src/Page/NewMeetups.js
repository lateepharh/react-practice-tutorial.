import NewmeetupForm from "../component/meetups/NewmeetupForm";
// To give the user feedback that the data which has been sent to the database work we need to trigger a navigation and to do this we need useNavigate which gives an object that reveals several methods
import { useNavigate } from "react-router-dom";
function NewMeetupsPage(){

    const navigate= useNavigate()
    // the fuction below is expected to get some meetup data and send our http request
    const AddMeetupHandler=(meetupData)=>{
        //fecth method firstargument shold be the url(.b the /meetups will add a meetup collection to the database) we want to send our request and the second is an object that allows configuration of the fetch
        //To signal to the firbase server we want to storedata we mustsend a post request:normally fetch sends a get request
        //The fecth below send a post request with our data to firebase
        fetch(
            'https://react-app-practice-9c5be-default-rtdb.firebaseio.com/meetups.json',
            {
                method:"POST",
                body: JSON.stringify(meetupData),
                headers:{
                   'Content-Type':"application/json"
                }
            }    
        ).then(()=>{
            navigate('/');
        });
    };
    return(
        <section>
           <h1>Add New Meetup</h1>
           <NewmeetupForm AddMeetup={AddMeetupHandler}/>

        </section>
    );
};


export default NewMeetupsPage