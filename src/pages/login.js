import React, { useRef, useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux'
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
import { login } from '../features/auth-slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);
    const toast = useToast();
    const handleClick = () => setShow(!show);
    const passwordRef = useRef();
    const nameRef = useRef();
    const dispatch = useDispatch();
    const userid = localStorage.getItem('userId');
    const isSuccess = useSelector((state) => state.auth.isSuccess);
    console.log(userid);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                username: nameRef.current.value,
                password: passwordRef.current.value,
            })
        );
        toast({
            title: 'Login Done',
            position: 'top-right',
            description: "Logged in successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
    }
    useEffect(() => {
        if (isSuccess) {
            console.log(userid, 'login');
            navigate('/');
        }
    }, [userid]);

    return (
        <Box className='login-box'>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md' rounded='md' bg='white'>
                <Card align='center'>
                    <CardHeader>
                        <Heading size='md'>Login</Heading>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel>Name:</FormLabel>
                            <Input placeholder='Enter your name' type='text' variant='filled' ref={nameRef} />
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
                        <Button type='submit' colorScheme='blue' mt={5} mb={3} ml={20}>Login</Button>
                    </form>
                    <Box as='a' fontWeight='bold' mb={5} >
                        Dont have an account ? <span>  </span>
                        <Button h='1.75rem' size='sm' colorScheme='blue' variant='outline'
                            onClick={() => {
                                navigate('/');
                            }
                            }>
                            Register
                        </Button>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Login