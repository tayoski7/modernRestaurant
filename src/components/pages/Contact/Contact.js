import React from 'react'
import './Contact.css'
import Food from './food.jpg'
const Contact = () =>{
    return(
        <div className="contactContainer">
            <div className="contactHero">
                <p className='contacts'>Contacts</p>
            </div>
            <div className="contactForm">
                <p className='reservation'>Make a reservation</p>
                <form className="formContainer">
                    <label className="labelText"for="name">Name</label><br/>
                    <input className="smallInput" type="text" name="name" placeholder="Enter Your Name"/><br/>
                    <label className="labelText" for="lastName">Last Name</label><br/>
                    <input type="text"className="smallInput" name="lastName" placeholder="Enter Your Last Name"/><br/>
                    <label className="labelText" for="email" >Your Email</label><br/>
                    <input type="email"className="smallInput" name="email" placeholder="Enter Your Email" required/><br/>
                    <label className="labelText"for="message" >Message</label><br/>
                    <input  type="text"className="bigInput" name="message" placeholder="Enter Your Message" required/>
                    <button className="contactSubmit">Submit</button>
                </form> 
            </div>
            <img className="food" src={Food}/>
            <div className="contactDetails">
                <div className='contactPara'>
                    <p className="detailsHead">Contacts</p>
                    <p className="detailsPara">+2348000000001<br/>modernrestaurant@gmail.com</p>
                </div>
                <div className='location'>
                    <p className="detailsHead">Location</p>
                    <p className="detailsPara">1420 Modern restaurant Avenue<br/>Lagos Nigeria</p>
                </div>
                <div className='hours'>
                    <p className="detailsHead">Hours</p>
                    <p className="detailsPara">Monday-Sunday<br/>10am-10pm</p>    
                </div>  
            </div>
            <div className="mapContainer">
                <iframe width="90%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=ikeja&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <br/>
                <br/>
            </div>   
        </div>
    )
}

export default Contact