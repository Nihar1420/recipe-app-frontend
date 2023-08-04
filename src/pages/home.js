import React from 'react'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import BurgerPic from '../assets/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.png'
import 'animate.css';

const Home = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        <Box height='30em' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='animate__animated animate__backInRight'>
          <Text fontSize='4xl'>Welcome !!!</Text>
          <Text fontSize='2xl'>To my recipe app</Text>
        </Box>
        <Box height='30em' style={{ display: 'flex', justifyContent: 'center' }} className="animate__animated animate__backInLeft">
          <img src={BurgerPic} alt="BurgerPic" width={550} />
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Home;