import React from 'react'
import {Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '3xl'
}
const Home = () => {
  return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p={'16'} >
                <Heading textTransform={"uppercase"} m={'auto'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} >Services</Heading>
                <Stack    
                    h="full"
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']} >
                    <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
                    <Text lineHeight={'190%'} letterSpacing={'widest'} p={['4', '8']} textAlign={'center'} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusantium, adipisci id cumque esse laborum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quas consectetur tempora quam optio nostrum mollitia, libero iste sunt deserunt cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi culpa aliquam in. Aliquam aperiam ullam fugit. Ipsam autem perspiciatis cumque, magni voluptas illum ipsa nobis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda saepe placeat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus provident explicabo tempore.
                    </Text>
                </Stack>
            </Container>
        </Box>
  )
}

const MyCarousel = () => (
    <Carousel 
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
        <Box w={'full'} h={'100vh'}  >
                <Image src={img1} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
                    Watch the videos
                </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
                <Image src={img2} />
                <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions} >
                     Enjoy the videos
                </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
                <Image src={img3} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >
                     Gaming on console
                </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
                <Image src={img4} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >
                      night life is cool
                </Heading>
        </Box>
        

    </Carousel>
)

export default Home