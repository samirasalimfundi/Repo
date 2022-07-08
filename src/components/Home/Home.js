import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button} from "reactstrap";
import "./Home.css";
import Carousel from "./carousel/carousel";
import LoginForm from "../LoginForm";
import "../LoginForm.css";
function Home() { 
  const adminUser = {
    email: "admin@admin.com",
    password:"admin123"
  }

  const[user, setUser]= useState({name:"",email:""});
  const [error,setError]= useState("");

  const login=details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
    console.log("logged in");
  
  else {
    console.log("details dont match");
  
   }
  }
  

  const logout = () => {
    console.log("logout");
  }

  return (
    <div>
         <div className="home">
        <div className="headerContainer">
            <h1>Package Transfer</h1>
            <p></p>
            <p></p>
            <h5>Welcome to get information</h5>
            <Link to="menu">
            <Button>start using</Button>
            </Link>
             <div className="App">
      {(user.email != "") ? (
        <div className="well">
          <h2>well<span>{user.name}</span></h2>
          <button onClick={logout}>logout</button>
          </div>
      ): (
        <LoginForm  login={login} error={error}/>
      )}
     
    </div> 
            <p></p>
            <p></p>
            <p></p>
            <Carousel/>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
    </div>
   
  );
}

export default Home;