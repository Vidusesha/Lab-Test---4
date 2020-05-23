import React, { Component } from "react";

export class App extends Component {
render() {

  return(
  
    <div className="App">
    <p>Contact Information</p>
    <div>
    <form action="/index.css">
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />


    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write.."></textarea>
    <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  )
}
}

export default App;