import { useEffect, useState } from "react";
import useWindowSize from "./resize";



export function Header() {
const [toggle,setToggle] = useState(false);
const [width, height] = useWindowSize();
let matches =(width<800)?false:true;
useEffect(() =>{
if(matches && toggle){
  setToggle(false)
}
},[matches])
const toggleMenu = ()=>{
  setToggle(!toggle);
}
  return (
  <div className="header">
      <div className="navbar-header ">
          <h1 className="logo">myTeam</h1>
          {((matches && !toggle )||( toggle && !matches) || matches)&&
          <div className={`navbar-list-href flex `}>
          <div className="left-side flex">
          <ul className="nav-list clean-list flex">
            <li>home</li>
            <li>about</li>
          </ul>
        </div>
        <div className="nav-right-side">
          <button className="contact-btn">Contact us</button>
        </div>
          </div>}
          {!matches && <button onClick={toggleMenu} className="btn btn-open-menu"><i className="fas fa-bars"></i></button>}
      </div>
    </div>
  );
}
