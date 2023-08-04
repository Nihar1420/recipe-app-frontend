import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Card,
  CardHeader,
  Heading,
  useToast,
  Box
} from '@chakra-ui/react';
import '../App.css'
import { register } from '../features/auth-slice';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);
  const passwordRef = useRef();
  const numberRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        username: nameRef.current.value,
        password: passwordRef.current.value,
        mobileNumber: numberRef.current.value,
        email: emailRef.current.value,
      })
    );
    toast({
      title: 'Account created.',
      position: 'top-right',
      description: "We've created your account successfully.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  }
  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
  }, [isSuccess]);
  return (
    <Box className='login-box'>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md' rounded='md' bg='white'>
        <Card align='center'>
          <CardHeader>
            <Heading size='md'>Register</Heading>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Name:</FormLabel>
              <Input placeholder='Enter your name' type='text' variant='filled' ref={nameRef} />
              <FormLabel>Email:</FormLabel>
              <Input placeholder='Enter your email' type='email' variant='filled' ref={emailRef} />
              <FormLabel>Phone number:</FormLabel>
              <Input placeholder='Enter your number' type='tel' variant='filled' ref={numberRef} />
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter your password'
                  variant='filled'
                  ref={passwordRef}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button type='submit' colorScheme='blue' mt={5} mb={3} ml={20}>Register</Button>
          </form>
          <Box as='a' fontWeight='bold' mb={5} >
            Already have an account ? <span>  </span>
            <Button h='1.75rem' size='sm' colorScheme='blue' variant='outline'
              onClick={() => {
                navigate('/login');
              }
              }>
              Login
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default Auth;