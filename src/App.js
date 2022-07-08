import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/nav/navbar";
import Home from "./components/Home/Home";
import AboutUS from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Service from "./components/Service";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App () {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password:"admin123"
  // }

  // const[user, setUser]= useState({name:"",email:""});
  // const [error,setError]= useState("");

  // const login=details => {
  //   console.log(details);
  //   if (details.email == adminUser.email && details.password == adminUser.password)
  //   console.log("logged in");
  
  // else {
  //   console.log("details dont match");
  
  //  }
  // }
  

  // const logout = () => {
  //   console.log("logout");
  // }

  return (
    <div>
    <Router>
    <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" exact component={Home}/>
          <Route path="/About" exact component={AboutUS}/>
          <Route path="/Service" exact component={Service}/>
          <Route path="/ContactUs/" exact component ={ContactUs}/>
      
        </Switch>
        
      </Router>
  
    {/* <div className="App">
      {(user.email != "") ? (
        <div className="well">
          <h2>well<span>{user.name}</span></h2>
          <button onClick={logout}>logout</button>
          </div>
      ): (
        <LoginForm  login={login} error={error}/>
      )}
     
    </div> */}
    
    </div>
  );
}

export default App;