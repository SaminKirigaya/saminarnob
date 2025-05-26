import React from 'react'

import {motion} from "framer-motion"
import cernameclick from '../Images/World help mobile.png'
import viewimgicon from '../Images/View.png'
import certf1 from '../Images/Cert 1.png'
import certf2 from '../Images/Cert 2.png'
import certf3 from '../Images/Cert 3.png'
import certf4 from '../Images/Cert 4.png'
import certf5 from '../Images/Cert 5.png'
import linedot from '../Images/Group 7.png'
import certboximg from '../Images/cert box img.png'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};



function on1() {
  
  
    document.getElementById("overlay1").style.display = "block";
    document.getElementById("overlay1").style.opacity = "1";
    document.getElementById("overlay1").style.transition= "opacity 1s ease";
    
  }
  
  function off1() {
    document.getElementById("overlay1").style.transition= "opacity 6s ease-in-out";
    document.getElementById("overlay1").style.opacity = "0";
    document.getElementById("overlay1").style.display = "none";
  }
  
  function on2() {
    document.getElementById("overlay2").style.transition= "opacity 6s ease-in-out";
    
    document.getElementById("overlay2").style.display = "block";
    document.getElementById("overlay2").style.opacity = "1";
  }
  
  function off2() {
    document.getElementById("overlay2").style.transition= "opacity 6s ease-in-out";
    document.getElementById("overlay2").style.opacity = "0";
    document.getElementById("overlay2").style.display = "none";
  }
  
  function on3() {
    document.getElementById("overlay3").style.transition= "opacity 6s ease-in-out";
    
    document.getElementById("overlay3").style.display = "block";
    document.getElementById("overlay3").style.opacity = "1";
  }
  
  function off3() {
    document.getElementById("overlay3").style.transition= "opacity 6s ease-in-out";
    document.getElementById("overlay3").style.opacity = "0";
    document.getElementById("overlay3").style.display = "none";
  }
  function on4() {
    document.getElementById("overlay4").style.transition= "opacity 6s ease-in-out";
    
    document.getElementById("overlay4").style.display = "block";
    document.getElementById("overlay4").style.opacity = "1";
  }
  
  function off4() {
    document.getElementById("overlay4").style.transition= "opacity 6s ease-in-out";
    document.getElementById("overlay4").style.opacity = "0";
    document.getElementById("overlay4").style.display = "none";
  }
  
  function on5() {
    document.getElementById("overlay5").style.transition= "opacity 6s ease-in-out";
    
    document.getElementById("overlay5").style.display = "block";
    document.getElementById("overlay5").style.opacity = "1";
  }
  
  function off5() {
    document.getElementById("overlay5").style.transition= "opacity 6s ease-in-out";
    document.getElementById("overlay5").style.opacity = "0";
    document.getElementById("overlay5").style.display = "none";
  }
  
  
  const openLink1 = ()=>{
    window.open('https://www.udemy.com/certificate/UC-bf9d5dbf-a8cb-4a28-b46e-48cd84c21795/', 'Certificate');
    return false
  }
  
  const openLink2 = ()=>{
    window.open('https://www.udemy.com/certificate/UC-75f83832-2971-4c8c-9b88-340478beaeb1/', 'Certificate');
    return false
  }
  
  const openLink3 = ()=>{
    window.open('https://www.udemy.com/certificate/UC-fb291181-57fe-41dd-bb18-e9fe4f517e31/', 'Certificate');
    return false
  }
  
  const openLink4 = ()=>{
    window.open('https://www.udemy.com/certificate/UC-04cc3bd6-20e8-4682-b236-bcd9f11c193b/', 'Certificate');
    return false
  }
  
  const openLink5 = ()=>{
    window.open('https://www.udemy.com/certificate/UC-a96b9954-87eb-44cf-979e-15d97fd10861/', 'Certificate');
    return false
  }
  


export default function Certifications() {
  return (
    <div className='certification'>
        <div className='mx-auto heading'><p>CERTIFICATIONS ...</p></div>
        <motion.div variants={containerVariants}
      initial="hidden"
      animate="show" className='row row-cols-10 row-cols-md-12 mx-auto flex-row align-items-start certboxcover'>

            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col-5 col-md-4 maincertbox'>
                <div className='imgbox'>
                    <img className='imageshape' src={certf1} loading='lazy'></img>
                    <img onClick={on1} className='eyeicon' src={viewimgicon}></img>
                    <img onClick={openLink1} className='worldicon' src={cernameclick}></img>

                </div>
                <div className='certnamebox'>
                    <img className='imageshapecertname' src={certboximg}></img>
                    <p onClick={on1} className='mx-auto text-center'>Complete Web & Mobile Designer
                    UI/UX Figma.</p>
                </div>
            </motion.div>


            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col-5 col-md-4 maincertbox'>
                <div className='imgbox'>
                    <img className='imageshape' src={certf2} loading='lazy'></img>
                    <img onClick={on2} className='eyeicon' src={viewimgicon}></img>
                    <img onClick={openLink2} className='worldicon' src={cernameclick}></img>

                </div>
                <div className='certnamebox'>
                    <img className='imageshapecertname' src={certboximg}></img>
                    <p onClick={on2} className='mx-auto text-center'>React - The Complete Guide
                    Redux, Framer Motion, Router.</p>
                </div>
            </motion.div>


            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col-5 col-md-4 maincertbox'>
                <div className='imgbox'>
                    <img className='imageshape' src={certf3} loading='lazy'></img>
                    <img onClick={on3} className='eyeicon' src={viewimgicon}></img>
                    <img onClick={openLink3} className='worldicon' src={cernameclick}></img>

                </div>
                <div className='certnamebox'>
                    <img className='imageshapecertname' src={certboximg}></img>
                    <p onClick={on3} className='mx-auto text-center'>Learn Complete Front-End Web Development.</p>
                </div>
            </motion.div>


            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col-5 col-md-4 maincertbox'>
                <div className='imgbox'>
                    <img className='imageshape' src={certf4} loading='lazy'></img>
                    <img onClick={on4} className='eyeicon' src={viewimgicon}></img>
                    <img onClick={openLink4} className='worldicon' src={cernameclick}></img>

                </div>
                <div className='certnamebox'>
                    <img className='imageshapecertname' src={certboximg}></img>
                    <p onClick={on4} className='mx-auto text-center'>The Web Developer Bootcamp
                    2023.</p>
                </div>
            </motion.div>


            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col-5 col-md-4 maincertbox'>
                <div className='imgbox'>
                    <img className='imageshape' src={certf5} loading='lazy'></img>
                    <img onClick={on5} className='eyeicon' src={viewimgicon}></img>
                    <img onClick={openLink5} className='worldicon' src={cernameclick}></img>

                </div>
                <div className='certnamebox'>
                    <img className='imageshapecertname' src={certboximg}></img>
                    <p onClick={on5} className='mx-auto text-center'>React Js A-Z with Laravel For 
                    Beginner - Advanced.</p>
                </div>
            </motion.div>


            
            




        </motion.div>

        <motion.img initial={{ opacity: 0.5, y: '30%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0.5, y: '30%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} className='linedots' src={linedot}></motion.img>

      
    </div>
  )
}
