import React from 'react';
import "./navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  console.log(props.handleSearchInput);

  return (
    <div className='nav'>
        <img  width={100} src = "https://purepng.com/public/uploads/large/amazon-logo-s3f.png" 
        alt = "logo"/>

        <div className='search-bar'>

            <div>
                <IoSearchSharp className='icon'/>
            </div>
        <input onChange={props.handleSearchInput} type = "text" placeholder='search products...'/>
        </div>
     
        
        <ul className='menu-items'>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to = "/contact"><li>Contact</li></NavLink>
        </ul>


    </div>
  )
}

export default Navbar
