import React from 'react'
import { SimpleGrid, Box, Text, Button } from '@chakra-ui/react'
import BurgerPic from '../assets/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.png'
import 'animate.css';

const Home = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        <Box height='30em' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          className='animate__animated animate__backInRight'>
          <div style={{ padding: '1rem' }}>
            <Text
              fontSize="4xl"
              color="white"
              bgGradient="linear(to-r, teal.300, blue.500)"
              bgClip="text"
              fontWeight="bold"
            >
              Welcome !!!
            </Text>
            <Text
              fontSize="2xl"
              color="gray.700"
              bgGradient="linear(to-l, green.300, teal.500)"
              bgClip="text"
            >
              To my recipe app
            </Text>
          </div>
          <div style={{ padding: '1rem' }}>
            <Button
              colorScheme="teal"
              size="md"
              borderRadius="xl"
              bgGradient="linear(to-r, teal.300, blue.500)"
              fontWeight="bold"
              _hover={{ bgGradient: 'none', bg: 'linear(to-r, teal.300, blue.500)' }}
            >
              Click here for more
            </Button>
          </div>
        </Box>
        <Box height='30em' style={{ display: 'flex', justifyContent: 'center' }} className="animate__animated animate__backInLeft">
          <div style={{ maxWidth: '100%', maxHeight: '100%', padding: '1rem' }}>
            <img src={BurgerPic} alt="BurgerPic" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Home;