import React from 'react'
import {motion} from "framer-motion"
import thirdtxt from "../Images/third text.png"
import thirdcircle from '../Images/Ellipse 4.png'
import thirdtriangle from '../Images/third triangle.png'
import thirdrect from '../Images/third rectangle.png'
import experience from '../Images/Group 2.png'


export default function Experience() {
  return (
    <div className='experience'>
        <div className='headfield'><p className='headtxt'>I'M EXPERIENCED IN ...</p></div>
        <motion.img initial={{ opacity: 0.5, x: '-30%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0.5, x: '-30%' }}
      transition={{ duration: 0.7, ease: 'easeInOut' }} className='txtexpgroup' src={thirdtxt}></motion.img>
        <motion.img initial={{ opacity: 0.5, y: '20%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0.5, y: '20%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} className='thirdcirc' src={thirdcircle}></motion.img>
        <motion.img initial={{ opacity: 0.5, y: '60%', rotate: 60 }}
      animate={{ opacity: 1, y: '0%', rotate: 0 }}
      exit={{ opacity: 0.5, y: '60%', rotate: 60 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} className='thirdtri' src={thirdtriangle}></motion.img>

        <motion.img initial={{ opacity: 0.5, y: '30%', rotate: 270 }}
  whileInView={{ opacity: 1, y: '0%', rotate: 270 }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='thirdrect1' src={thirdrect}></motion.img>
        <motion.img
        initial={{ opacity: 0.5, y: '90%', rotate: 270 }}
        whileInView={{ opacity: 1, y: '0%', rotate: 270 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='thirdrect2' src={thirdrect}></motion.img>

        <motion.img initial={{ opacity: 0.5, y: '30%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='mx-auto explogo' src={experience} loading='lazy'></motion.img>
      
    </div>
  )
}
