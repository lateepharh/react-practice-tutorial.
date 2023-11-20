import React from 'react';
import { useRef } from 'react';

import Card from '../ui/Card';
import Class from "./Newmeetupform.module.css"


const NewmeetupForm = (props) => { 
    
    //To read the enter values in the form they are two ways to do that: using useState and using refs(stands for reference :with this we get acess and manipulate to dom elements); Ref is very useful in reading vlaues inputed
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

 //After we use a special prop "ref in the input elemnet and  point at the titleinputref as a value:- This establish a connection and access

    const submitHandler= (event)=>{
        event.preventDefault();
        //the .current holds the current value in input element
       const enteredTitle = titleInputRef.current?.value;
       const enteredImage = imageInputRef.current?.value;
        const enteredAddress = addressInputRef.current?.value;
        const enteredDescription = descriptionInputRef?.current.value;
        console.log(new Date());

        const meetupData = {
           title:enteredTitle,
          image : enteredImage,
          address:enteredAddress,
          description:enteredDescription,
         createdAt: new Date()
        };
        props.AddMeetup(meetupData);
    };
  return (
    <Card>
        {/* To listen to the submission we add an event handler (onSubmit to the form tag) */}
        <form action="" className={Class.form} onSubmit={submitHandler}>
            <div className={Class.control}>
                <label htmlFor="Meetup Title" >Meetup Title</label>
                <input type="text" name="img" id="Meetup Title" required ref={titleInputRef}/>
            </div>
            <div className={Class.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" name="title" id="image" required ref={imageInputRef} />
            </div>
            <div className={Class.control}>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" required ref={addressInputRef} />
            </div>
            <div className={Class.control}>
                <label htmlFor="description">Description</label>
                <textarea name="des" id="description" cols="30" required rows="5" ref={descriptionInputRef}></textarea>
            </div>
            <div className={Class.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
  );
};
// To handle the form submission we have to do two things: listen to the form submision and prevent the browser's defaul which automatically sends the http submission and reloads the page 
export default NewmeetupForm; 