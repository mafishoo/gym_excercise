import React, {useState} from 'react'
import { Box } from '@mui/material'
import SearchExcercise from '../components/searchExcercise/SearchExcercise'
import Excercises from '../components/excercises/Excercises'
import HeroBanner from '../components/heroBanner/HeroBanner'


const Home = () => {
  return (
    <Box> 
    <HeroBanner/> 
    <SearchExcercise/>
    <Excercises/>
     </Box>
  )
}

export default Home