import React from 'react';
// Route is a react-router comopnent used to define different paths in the url and whivh component should be loaded for this differnt paths
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import AllMeetupPage from './Page/AllMeetups';
import NewMeetupsPage from './Page/NewMeetups';
import Favorites from './Page/Favorites';
import Layout from "./component/layout/Layout"
const App = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<AllMeetupPage/>}></Route>
           {/* path is an attribute that will be the path(e.g /Favourite) in the url after the domain(here our domain is localhost:3002)  */}
           <Route path='/Favourite' element={<Favorites/>}></Route>
           <Route path='/newmeetup' element={<NewMeetupsPage/>}></Route>
        </Routes>
    </Layout>
  )
}

export default App
// import { useState } from 'react'

// const App = () => {
//     const [color, setTheColor] = useState("red")
//     const setBlue =()=>{
//         setTheColor("Blue");
//     };
//     const setPink =()=>{
//         setTheColor("Pink");
//     };
//     const setYellow =()=>{
//         setTheColor("Yellow");
//     };
//     const setLemon =()=>{
//         setTheColor("Lemon");
//     };
//   return (
//     <div>
//         <h1>My Favourite color is {color} </h1>
//         <button onClick={setBlue}>Blue</button>
//         <button onClick={setPink}>Pink</button>
//         <button onClick={setYellow}>Yellow</button>
//         <button onClick={setLemon}>Lemon</button>
//     </div>
//   )
// }
