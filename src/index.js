import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavouritesContexProvider } from './store/favourite-context';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
   <FavouritesContexProvider>
       <BrowserRouter>
        <App/>
       </BrowserRouter>
   </FavouritesContexProvider>
)
