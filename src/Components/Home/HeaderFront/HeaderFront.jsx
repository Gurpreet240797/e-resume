import React from 'react'
import { useState } from 'react'
import AnimatedTitles from './AnimatedtTitles'
import image from '../../../Assets/me.jpeg'
import { Button, Image } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../Styles/frontheader.scss'

const HeaderFront = () => {
    const [rotate, setRotate] = useState(false);
    return (
        <div>
            <div className="frontheader">
                <motion.div animate={{ rotate: rotate ? 360 : 0}} onClick={() => {
                            setRotate(!rotate)
                        }} onHoverStart={() => {
                                setRotate(!rotate)
                            }}>
                    <Image thumbnail className="circularimage" src = {image} alt='noImg' />
                    </motion.div>

                <div style={{display: 'flex', flexDirection: 'column', padding: 0, margin: 0}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <h3 style = {{color: '#e63946', marginTop: 15, padding: 3}}>  Hi <span role="img" aria-label="hi"> 👋🏻 </span> I'm </h3>
                        <h3 style = {{color: '#f1faee', marginTop: 15}}> Gurpreet Singh  </h3>
                    </div>
                    <p style={{color: '#f1faee', marginTop: '0.1em', fontSize: '1em', textAlign: 'center'}}> 
                    Master's(MApCompSc) Student from Concordia University, enthusiastic Software Solutions creator.</p>
                </div>
                <AnimatedTitles /> 
                <Button style={{display: "hidden"}} variant="light" href="https://drive.google.com/file/d/1v9zijrpmbBZm3J3t61tF35ovKXjwBL2P/view?usp=drive_link"> <span style={{fontSize: '1em', display: 'hidden'}} role="img" aria-label="cv"> 👨🏻‍💻  </span> Resume </Button> 
            </div>
            <div style={{color: 'white', display: 'flex', marginTop: -40, justifyContent: 'flex-end', marginRight: 10}}> 
                <a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/Gurpreet240797/"> <FaGithub style = {{marginRight: 15, fontSize: 20}}/> </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://www.linkedin.com/in/g-singh-/"> <FaLinkedin style = {{marginRight: 20}}/> </a>
            </div>
        </div>
    )
}

export default HeaderFront
