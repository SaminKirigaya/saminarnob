import React from 'react'
import { useState, useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import {motion} from "framer-motion"

import proj1 from '../Images/project1.png'
import proj2 from '../Images/project2.png'
import proj3 from '../Images/project3.png'
import proj4 from '../Images/project4.png'
import proj5 from '../Images/project5.png'

import giticon from '../Images/Github.png'
import dribblicon from '../Images/Dribbble.png'

const opengithub = ()=>{
    window.open('https://github.com/SaminKirigaya?tab=repositories', 'Certificate');
    return false
  }
  const openDribbble = ()=>{
    window.open('https://dribbble.com/Samin97', 'Certificate');
    return false
  }
  const openproj1 = ()=>{
    window.open('https://dribbble.com/shots/25972786-Home-Rental-App-and-Site-For-Students', 'Certificate');
    return false
  }
  const openproj2 = ()=>{
    window.open('https://dribbble.com/shots/25895802-Event-Planner-App', 'Certificate');
    return false
  }
  const openproj3 = ()=>{
    window.open('https://dribbble.com/shots/25895876-Car-Company-Web-App-Interface', 'Certificate');
    return false
  }
  const openproj4 = ()=>{
    window.open('https://dribbble.com/shots/25895903-Real-Estate-Webpage-Landing-Page-Design', 'Certificate');
    return false
  }
  const openproj5 = ()=>{
    window.open('https://dribbble.com/shots/25895778-E-Commerce-Web-app', 'Certificate');
    return false
  }


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
  
  

export default function Projects() {
   const [tooltipSz, setTooltipsz] = useState("14px")
    const readTooltip = ()=>{
      if(window.innerWidth<371){
        setTooltipsz("14px")
      }else if(window.innerWidth>370 && window.innerWidth<428){
        setTooltipsz("15px")
      }
      else if(window.innerWidth>427 && window.innerWidth<501){
        setTooltipsz("16px")
      }
      else if(window.innerWidth>500 && window.innerWidth<600){
        setTooltipsz("16px")
      }
      else if(window.innerWidth>599 && window.innerWidth<741){
        setTooltipsz("16px")
      }
      else if(window.innerWidth>740 && window.innerWidth<768){
        setTooltipsz("18px")
      }
      else if(window.innerWidth>767 && window.innerWidth<900){
        setTooltipsz("19px")
      }
      else if(window.innerWidth>767 && window.innerWidth<1000){
        setTooltipsz("19px")
      }
      else if(window.innerWidth>1000 && window.innerWidth<1280){
        setTooltipsz("25px")
      }
  
    }
    
  
    useEffect(()=>{
        readTooltip()
        window.$('[data-bs-toggle="tooltip"]').tooltip();
    
        return ()=>{
          window.$('[data-bs-toggle="tooltip"]').tooltip('dispose');
        }
      },[])

  return (
    <motion.div variants={containerVariants}
    initial="hidden"
    animate="show" className='projects'>
        <Tooltip trigger={['hover', 'click', 'focus']} title="Home Rental Web and Mobile Project." placement="bottom" arrow componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#1995AD',
                    color: '#f1f1f2',
                    fontFamily:'Inter',
                    fontSize: tooltipSz,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    '& .MuiTooltip-arrow': {
                      color: '#1995AD', // Arrow color matches background
                    },
                  },
                },
              }}><motion.img variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj1} className='proj1 roundBorder' src={proj1} loading='lazy'></motion.img></Tooltip>
        
        <Tooltip trigger={['hover', 'click' , 'focus']} title="Event Management Website and Mobile Project." placement="bottom" arrow componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#1995AD',
                    color: '#f1f1f2',
                    fontFamily:'Inter',
                    fontSize: tooltipSz,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    '& .MuiTooltip-arrow': {
                      color: '#1995AD', // Arrow color matches background
                    },
                  },
                },
              }}><motion.img variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj2}  className='proj2 roundBorder' src={proj2} loading='lazy'></motion.img></Tooltip>

        <Tooltip trigger={['hover', 'click', 'focus']} title="Car Company Website Project." placement="bottom" arrow componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#1995AD',
                    color: '#f1f1f2',
                    fontFamily:'Inter',
                    fontSize: tooltipSz,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    '& .MuiTooltip-arrow': {
                      color: '#1995AD', // Arrow color matches background
                    },
                  },
                },
              }}><motion.img variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj3}  className='proj3 roundBorder' src={proj3} loading='lazy'></motion.img></Tooltip>

        <Tooltip trigger={['hover', 'click', 'focus']} title="Real Estate Web Project." placement="bottom" arrow componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#1995AD',
                    color: '#f1f1f2',
                    fontFamily:'Inter',
                    fontSize: tooltipSz,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    '& .MuiTooltip-arrow': {
                      color: '#1995AD', // Arrow color matches background
                    },
                  },
                },
              }}><motion.img variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj4}  className='proj4 roundBorder' src={proj4} loading='lazy'></motion.img></Tooltip>
        <Tooltip trigger={['hover', 'click', 'focus']} title="E-Commerce Site Business Web and Mobile Project." placement="bottom" arrow componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#1995AD',
                    color: '#f1f1f2',
                    fontFamily:'Inter',
                    fontSize: tooltipSz,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    '& .MuiTooltip-arrow': {
                      color: '#1995AD', // Arrow color matches background
                    },
                  },
                },
              }}><motion.img variants={itemVariants}
              transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj5}  className='proj5 roundBorder' src={proj5} loading='lazy'></motion.img></Tooltip>
        <div className='d-flex justify-content-center align-items-center viewmore'><p>VIEW MORE</p>
        <Tooltip title="More GitHub Projects" placement="bottom" arrow componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#1995AD',
                    color: '#f1f1f2',
                    fontFamily:'Inter',
                    fontSize: tooltipSz,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    '& .MuiTooltip-arrow': {
                      color: '#1995AD', // Arrow color matches background
                    },
                  },
                },
              }}><img className='imgsize' onClick={opengithub} src={giticon}></img></Tooltip>
        <Tooltip title="More Dribbble Projects" placement="bottom" arrow componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: '#1995AD',
                    color: '#f1f1f2',
                    fontFamily:'Inter',
                    fontSize: tooltipSz,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    '& .MuiTooltip-arrow': {
                      color: '#1995AD', // Arrow color matches background
                    },
                  },
                },
              }}><img className='imgsize' onClick={openDribbble} src={dribblicon}></img></Tooltip>
        </div>
      
    </motion.div>
  )
}
