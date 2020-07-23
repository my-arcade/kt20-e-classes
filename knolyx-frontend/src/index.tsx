import ReactDOM from "react-dom";
import React from 'react';
import Form from './modules/Administration/Form.component';

const wrapper = document.getElementById("app"); 
wrapper ? ReactDOM.render(<Form />, wrapper) : false;