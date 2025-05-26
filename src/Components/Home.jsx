import React from 'react'
import { useEffect } from 'react'
import {motion} from "framer-motion"
import polyBlock from '../Images/Group 1.png'
import myimg from '../Images/openart-5a4705472d224e6aa7974f6cb9e06071_raw 1 1.png'

export default function Home() {


  return (
    <div id="firstHome" className='firsthome'>
                      
                      <motion.div initial={{ opacity: 0.5, y: '30%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0.5, y: '30%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} id="btMobile" className='mx-auto buildtext'><p>LET’S BUILD SOMETHING GREAT TOGETHER.</p></motion.div>
                      <motion.img initial={{ opacity: 0.5, y: '50%', rotate: 55 }}
      animate={{ opacity: 1, y: '0%', rotate: -45 }}
      exit={{ opacity: 0.5, y: '50%' , rotate: 55 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} id="pbMobile" className='builddispimg' src={polyBlock}></motion.img>
                      <img className='buildmyimg' src={myimg} loading='lazy'></img>
                      
                    </div>
  )
}
