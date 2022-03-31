import React, { useState } from 'react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex, Container, Input, Heading, Center, Box, Divider, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem('loggedIn', true)
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)

        setUsername('')
        setPassword('')

        navigate('/todolist')
    }

  return (
    <Box h='100vh' d='flex' alignItems='center'>
        
        <Container maxW='md'>
        <Box p={4} borderWidth='1px' borderRadius='lg' boxShadow='lg'>
            <Center>
              <Heading as="h6" size='lg' mt={4} mb={5}>Login User</Heading>
            </Center>
            <Divider mb={10} />
              
            <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input width="100%" id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                <FormHelperText>Username is required</FormHelperText>

                <Divider mt={4} mb={4} />

                <FormLabel htmlFor="password">Password</FormLabel>
                <Input type='password' width="100%" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <FormHelperText>Password is required</FormHelperText>

                <Button onClick={handleSubmit} w='100%' mt={4}>Login</Button>
            </FormControl>
            </Box>
        </Container>
        
    </Box>
  )
}

export default Login