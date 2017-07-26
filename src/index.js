// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
// Include the main Parent Component
import Parent from './components/Parent';

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render((<BrowserRouter><Parent /></BrowserRouter>), document.getElementById("root"));