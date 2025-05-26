import React, { useEffect} from 'react'
import {motion} from 'framer-motion'

export default function About() {



  return (
    <div className='aboutme'>
        <motion.div initial={{ opacity: 0.5, y: '30%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0.5, y: '30%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} id="aboutMobile" className='mx-auto about'><p className='headtxt'>HI THERE! I’M SAMIN ARNOB.</p><p className='txtalign bodytxt'>
        I’m a professional UI/UX Designer (Major) and MERN Stack Developer. I was born in 29, September, 1996. Currently, I’m living in Dhaka, Bangladesh and opened for any remote or onsite job. Feel free to message me anytime you need.</p></motion.div>

        <motion.div initial={{ opacity: 0.5, y: '30%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0.5, y: '30%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} id="about1Mobile" className='mx-auto exp'>
            <p className='headtxt'>4 +</p>
            <p className='bodytxt'>Years of Experience</p>
        </motion.div>

        <motion.div initial={{ opacity: 0.5, y: '30%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0.5, y: '30%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} id="about2Mobile" className='mx-auto project'>
            <p className='headtxt'>29 +</p>
            <p className='bodytxt'>Total Projects</p>
        </motion.div>

        <motion.div initial={{ opacity: 0.5, y: '30%' }}
      animate={{ opacity: 1, y: '0%' }}
      exit={{ opacity: 0.5, y: '30%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }} id="about3Mobile" className='mx-auto dribbble'>
            <p className='headtxt'>10 +</p>
            <p className='bodytxt'>Dribbble Projects</p>
        </motion.div>



    </div>
    
  )
}
