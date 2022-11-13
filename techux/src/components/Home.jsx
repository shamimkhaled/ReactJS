import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>TechUx</h1>
                <p>Solutions to your problems.</p>
            </main>
        </div>

        <div className='home-section1'>
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    We are your one and only solution to the tech problems you face
                    every day. We are leading tech company whose aim is to increase the
                    problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home-section2" id='about'>

            <div>
                <h1>Who we are?</h1>
                <p>
                    We are a team of tech enthusiasts who are working to solve the tech problems of the world. 
                    We are a team of tech enthusiasts who are working to solve the tech problems of the world. 
                    We are a team of tech enthusiasts who are working to solve the tech problems of the world. 
                    We are a team of tech enthusiasts who are working to solve the tech problems of the world.
                    We are a team of tech enthusiasts who are working to solve the tech problems of the world.  
                </p>
            </div>
        </div>

        <div className="home-section3" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: '0.3s'
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div> 
                    <div style={{
                        animationDelay: '0.5s'
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div> 
                    <div style={{
                        animationDelay: '0.7s'
                    }}>
                        <AiFillYoutube />
                        <p>YouTube</p>
                    </div> 
                    <div style={{
                        animationDelay: '1s'
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home