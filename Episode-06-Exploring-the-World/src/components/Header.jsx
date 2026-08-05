import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    
  const [btnName, setbtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            {/* Dynamic login logout button */}
            {/* callback function in click handler */}
            {/* as soon as i click on this btn button btnName getupdated to logout but our ui does not render , header component does not referesh , there should be somem referesh so that header component takes that btnName */}
            <button className="login" onClick={()=>{
             btnName === "Login" ?  setbtnName("Logout") : setbtnName("Login");
              }}>{btnName}</button>
          </ul>
        </div>
      </div>
    ); 
  };

export default Header;
