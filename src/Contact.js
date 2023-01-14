import React from "react";
import Form from "./Components/Form";
import macaron from './makaruny-shokolad.jpg';


function Contact() {

    return (
<div className="contact-form">
   <Form />
   <img className="d-block w-100 d-flex" src={ macaron } alt="foto" />
</div>  
 )
}

export default Contact;
