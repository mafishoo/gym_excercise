import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "/Users/merafasbe/Desktop/Project/gym_excercise/src/assets/images/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Stack className="navBarContainer" sx={{
      gap:{
      sm: '122px', xs:'40px'
      },
      mt: {
        sm: '32px', xs:'20px'
      },
      justifyContent: 'none'
      }
      
      }>
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <Stack  className="navBar">
        <Link className= "homeLink home" to="/">Home</Link>
        <a href="#excercises" className="home">Excercises</a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
