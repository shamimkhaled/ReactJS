import React from 'react'
import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'8'}>
        <form>
            <VStack
                alignItems={'stretch'}
                spacing={'4'}
                w={['full', '96']}
                m={'auto'}
                my={'8'}
            >
                <Heading alignSelf={'center'}>VIDEO TUBE</Heading>
                <Avatar alignSelf={'center'} boxSize={'24'} />

                <Input
                placeholder={'Name'}
                type={'text'}
                required
                focusBorderColor={'purple.500'}
                />
                <Input
                placeholder={'Email'}
                type={'email'}
                required
                focusBorderColor={'purple.500'}
                />
                <Input
                placeholder={'Password'}
                type={'password'}
                required
                focusBorderColor={'purple.500'}
                />
                 <Input
                placeholder={'Confirm Password'}
                type={'password'}
                required
                focusBorderColor={'purple.500'}
                />

                <Button colorScheme={'purple'} type={'submit'}>
                    Sign Up
                </Button>

                <Text textAlign={'right'}>
                    Already Signed Up?{' '}
                    <Button variant={'link'} colorScheme={'purple'}>
                        <Link to={'/signin'}>Sign In</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Signup
 