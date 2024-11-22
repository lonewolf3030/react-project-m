import React from 'react';
import "./navbar.css";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = (props) => {

  console.log(props.handleSearchInput)

  return (
    <div className='nav'>
        <img width={200} src = "https://purepng.com/public/uploads/large/amazon-logo-s3f.png" 
        alt = "logo"/>

        <div className='search-bar'>

            <div>
                <IoSearchSharp className='icon'/>
            </div>
        <input onChange={props.handleSearchInput} type = "text" placeholder='search products...'/>
        </div>
     
        
        <ul className='menu-items'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>


    </div>
  )
}

export default Navbar