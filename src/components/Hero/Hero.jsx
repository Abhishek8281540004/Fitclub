import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

function Hero() {
    const transition={type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='home'>

        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
{/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial = {{left: mobile? "165px":'238px'}}
                whileInView ={{left: '8px'}}
                transition = {{...transition, type: 'tween'}}>

                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
            {/* hero heading*/}
            <div className="hero-text">
                <div><span className='stroke-text'>
                    Shape </span><span>Your</span> 
                </div>
                <div><span>
                    Ideal body</span>
            </div>
            <div>
                <span> IN HERE WE WILL HELP YOU TO SHARE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST</span>
            </div>
        </div>
        <div className="figures">
            <div>
                <span>
                    <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                </span>
                <span>EXPERT COACHES</span>
            </div>

             <div>
                <span>
                <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                </span>
                <span>MEMBERS JOINED</span>
            </div>
            <div>
                <span>
                <NumberCounter end={56} start={10} delay='4' preFix="+"/>
                </span>
                <span>FITNESS PROGRAMS</span>
            </div>
        </div>
        <div className="hero-button">
            <button className='btn'>Get started</button>
            <button className='btn'>Learn More</button>
        </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div
            transition={transition}
            initial={{right:'-1rem'}}
            whileInView={{right: '4rem'}} 
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>
            <img src={hero_image} className='hero-image' alt="" />
            <motion.img
            initial={{right:"11rem"}}
            whileInView={{right:"20rem"}}
            transition={transition}
             src={hero_image_back} className='hero-image-back' alt="" />
            
            <motion.div
            initial={{right:"37rem"}}
            whileInView={{right:"28rem"}}
            transition={transition}
             
            className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
