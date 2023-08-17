import React from 'react'
import {Box,Button,Hidden,Stack,Typography} from "@mui/material"
import "./HeroBanner.css"
import HeroBannerImage from '/Users/merafasbe/Desktop/Project/gym_excercise/src/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box className="heroContiner" sx={{
      mt:{lg:'312px', xs:'70px'}, ml:{sm:'50px',xs:'50px'}
    }} position = 'relative' p='20px' > 
    <Typography color="#FF2625" fontWeight="600" fontSize= "26px">
      The Fano Fitness Club
    </Typography>
    <Typography fontWeight= {700} 
    sx={{fontSize:{lg:'44px', xs: '40px'}}} >
      Sweat,Smile,<br/> and Repeat
    </Typography>
    <Typography fontSize="22px" lineHeight="35px" mb={3}>
      Check out the most effective excercises
    </Typography>
    <Button variant='contained' color="error" href='#excercises'> Explore Exercise</Button>
    <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner