import React from 'react'
import {
    Drawer, 
    DrawerBody, 
    DrawerContent, 
    DrawerHeader, DrawerOverlay, 
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
        <>
            <Button pos={'fixed'} 
                 top={'4'}
                 left={'4'}
                 w={'10'}
                 h={'10'}
                 p={'0'}
                 zIndex={"overlay"}
                 borderRadius={'full'}
                 colorScheme={'purple'}
                 onClick={onOpen}>
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer 
            isOpen={isOpen}
            placement={'left'}
            onClose={onClose} >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        VIDEO TUBE
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/" }>Home</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/videos" }>Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/videos?category=free" }>Free Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/upload" }>Upload Video</Link>
                            </Button>
                            
                        </VStack>
                        <HStack
                         pos={'absolute'}
                         left={'1'} 
                         bottom={'10'}
                         //bgColor={'red'}
                         w={'full'}
                         justifyContent={'space-evenly'} >
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to={"/signin"}>Sign In</Link>
                            </Button> 
                            <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>

                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>


        </>
  )
}

export default Header