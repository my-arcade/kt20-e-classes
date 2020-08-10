import ReactDOM from "react-dom";
import React from 'react';
import App from './App.wrapper';

const wrapper = document.getElementById("app"); 

wrapper ? ReactDOM.render(<App />, wrapper) : false;