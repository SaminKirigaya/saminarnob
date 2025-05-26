import React,{useState, useEffect, useRef} from 'react'
import {motion} from "framer-motion"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

import Home from '../Components/Home';
import About from '../Components/About'
import Experience from '../Components/Experience';
import Certifications from '../Components/Certifications';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import Contact from '../Components/Contact';


import myimg from '../Images/openart-5a4705472d224e6aa7974f6cb9e06071_raw 1 1.png'
import poly from '../Images/polygon-1.svg'
import hoverdot from '../Images/hover dot.png'
import activedot from '../Images/active dot.png'
import polyBlock from '../Images/Group 1.png'
import thirdcircle from '../Images/third circle.png'
import thirdtriangle from '../Images/third triangle.png'
import thirdrect from '../Images/third rectangle.png'
import thirdTxt from '../Images/third text.png'
import experience from '../Images/Group 2.png'
import linedot from '../Images/Group 7.png'
import certboximg from '../Images/cert box img.png'
import certif1 from '../Images/UC-bf9d5dbf-a8cb-4a28-b46e-48cd84c21795 1.png'
import certif2 from '../Images/UC-75f83832-2971-4c8c-9b88-340478beaeb1 1.png'
import certif3 from '../Images/UC-fb291181-57fe-41dd-bb18-e9fe4f517e31 1.png'
import certif4 from '../Images/UC-04cc3bd6-20e8-4682-b236-bcd9f11c193b 1.png'
import certif5 from '../Images/UC-a96b9954-87eb-44cf-979e-15d97fd10861 1.png'
import cernameclick from '../Images/World help.png'
import viewimgicon from '../Images/View.png'
import certf1 from '../Images/Cert 1.png'
import certf2 from '../Images/Cert 2.png'
import certf3 from '../Images/Cert 3.png'
import certf4 from '../Images/Cert 4.png'
import certf5 from '../Images/Cert 5.png'
import proj1 from '../Images/project1.png'
import proj2 from '../Images/project2.png'
import proj3 from '../Images/project3.png'
import proj4 from '../Images/project4.png'
import proj5 from '../Images/project5.png'

import giticon from '../Images/Github.png'
import dribblicon from '../Images/Dribbble.png'

import servc1 from '../Images/service1img.png'
import servc2 from '../Images/service2img.png'
import servc3 from '../Images/service3img.png'
import servhuman from '../Images/sevice human.png'
import sixrect from '../Images/sixth rect.png'
import sixcir from '../Images/sixthcircle.png'
import sixtri from '../Images/sixthtriangle.png'
import sixthline from '../Images/sixtline.png'

import contactdrbble from '../Images/logos_dribbble-icon.png'
import gitcontact from '../Images/mdi_github.png'
import contactphone from '../Images/gg_phone.png'
import map from '../Images/bxs_map.png'

import payoneer from '../Images/lineicons_payoneer.png'
import bkash from '../Images/bkash.png'
import nogod from '../Images/nogod.png'
import cod from '../Images/cash on delivery.png'
import mailicon from '../Images/basil_gmail-solid.png'

import homeicon from '../Images/iconamoon_home-fill.png'
import infoicon from '../Images/fa_info.png'
import expicon from '../Images/carbon_skill-level-advanced.png'
import certicon from '../Images/tdesign_certificate-1-filled.png'
import projectsicon from '../Images/fluent_task-list-square-20-filled.png'
import serviceicon from '../Images/solar_tag-price-bold.png'
import contacticon from '../Images/iconoir_phone-solid.png'



const containerVariantsDesk = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between each child
    },
  },
};

const itemVariantsDesk = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};


const containerVariantsDesk2 = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between each child
    },
  },
};

const itemVariantsDesk2 = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};


const containerVariantsDesk3 = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between each child
    },
  },
};

const itemVariantsDesk3 = {
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

const openFacebook = ()=>{
  window.open('https://www.facebook.com/samin.arnob.3', 'Certificate');
  return false
}


export default function Mainfile() {
  const [tooltipSzBg, setTooltipszBg] = useState("14px")
      const readTooltip = ()=>{
        if(window.innerWidth>1199 && window.innerWidth<1531){
          setTooltipszBg("19px")
        }
        else if(window.innerWidth>1530 && window.innerWidth<1911){
          setTooltipszBg("24px")
        }
        else if(window.innerWidth>1910 && window.innerWidth<2551){
          setTooltipszBg("29px")
        }
        else if(window.innerWidth>2550){
          setTooltipszBg("37px")
        }
    
      }
      

  useEffect(()=>{
    readTooltip()
    window.$('[data-bs-toggle="tooltip"]').tooltip();

    return ()=>{
      window.$('[data-bs-toggle="tooltip"]').tooltip('dispose');
    }
  },[])



 
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const expRef = useRef(null);
    const certRef = useRef(null);
    const projectRef = useRef(null);
    const serviceRef = useRef(null);
    const contactRef = useRef(null);
  
    const scrollTo = (ref) => {
      if(ref===aboutRef){
        const top = ref.current.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: top - 150,
            behavior: "smooth",
  });
      }else{
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }
      
    };



    const hoverhomeNav = (e)=>{
      try{
        document.getElementById("homeActive").classList.remove("displayactivedot")
        document.getElementById("homeActive").classList.add("displayactivedotInActive")
        document.getElementById("homeHover").classList.remove("displayhoverdot")
        document.getElementById("homeHover").classList.add("displayhoverdotActive")


      }catch(err){
        console.log(err)
      }
    }
    const activeHome = (e)=>{
      try{
        document.getElementById("homeHover").classList.remove("displayhoverdotActive")
        document.getElementById("homeHover").classList.add("displayhoverdot")
        document.getElementById("homeActive").classList.remove("displayactivedotInActive")
        document.getElementById("homeActive").classList.add("displayactivedot")


        document.getElementById("aboutActive").classList.remove("displayactivedot")
        document.getElementById("aboutActive").classList.add("displayactivedotInActive")
        document.getElementById("expActive").classList.remove("displayactivedot")
        document.getElementById("expActive").classList.add("displayactivedotInActive")
        document.getElementById("certActive").classList.remove("displayactivedot")
        document.getElementById("certActive").classList.add("displayactivedotInActive")
        document.getElementById("projectActive").classList.remove("displayactivedot")
        document.getElementById("projectActive").classList.add("displayactivedotInActive")
        document.getElementById("serviceActive").classList.remove("displayactivedot")
        document.getElementById("serviceActive").classList.add("displayactivedotInActive")
        document.getElementById("contactActive").classList.remove("displayactivedot")
        document.getElementById("contactActive").classList.add("displayactivedotInActive")


      }catch(err){
        console.log(err)
      }
    }
    const hoverHomeLeave = (e)=>{
      try{
        document.getElementById("homeHover").classList.remove("displayhoverdotActive")
        document.getElementById("homeHover").classList.add("displayhoverdot")
      }catch(err){
        console.log(err)
      }
    }





    
    const hoveraboutNav = (e)=>{
      try{
        document.getElementById("aboutActive").classList.remove("displayactivedot")
        document.getElementById("aboutActive").classList.add("displayactivedotInActive")
        document.getElementById("aboutHover").classList.remove("displayhoverdot")
        document.getElementById("aboutHover").classList.add("displayhoverdotActive")


      }catch(err){
        console.log(err)
      }
    }
    const activeAbout = (e)=>{
      try{
        document.getElementById("aboutHover").classList.remove("displayhoverdotActive")
        document.getElementById("aboutHover").classList.add("displayhoverdot")
        document.getElementById("aboutActive").classList.remove("displayactivedotInActive")
        document.getElementById("aboutActive").classList.add("displayactivedot")


        document.getElementById("homeActive").classList.remove("displayactivedot")
        document.getElementById("homeActive").classList.add("displayactivedotInActive")
        document.getElementById("expActive").classList.remove("displayactivedot")
        document.getElementById("expActive").classList.add("displayactivedotInActive")
        document.getElementById("certActive").classList.remove("displayactivedot")
        document.getElementById("certActive").classList.add("displayactivedotInActive")
        document.getElementById("projectActive").classList.remove("displayactivedot")
        document.getElementById("projectActive").classList.add("displayactivedotInActive")
        document.getElementById("serviceActive").classList.remove("displayactivedot")
        document.getElementById("serviceActive").classList.add("displayactivedotInActive")
        document.getElementById("contactActive").classList.remove("displayactivedot")
        document.getElementById("contactActive").classList.add("displayactivedotInActive")


      }catch(err){
        console.log(err)
      }
    }


    const hoverAboutLeave = (e)=>{
      try{
        document.getElementById("aboutHover").classList.remove("displayhoverdotActive")
        document.getElementById("aboutHover").classList.add("displayhoverdot")
      }catch(err){
        console.log(err)
      }
    }




    
    
    const hoverexpNav = (e)=>{
      try{
        document.getElementById("expActive").classList.remove("displayactivedot")
        document.getElementById("expActive").classList.add("displayactivedotInActive")
        document.getElementById("expHover").classList.remove("displayhoverdot")
        document.getElementById("expHover").classList.add("displayhoverdotActive")


      }catch(err){
        console.log(err)
      }
    }
    const activeExp = (e)=>{
      try{
        document.getElementById("expHover").classList.remove("displayhoverdotActive")
        document.getElementById("expHover").classList.add("displayhoverdot")
        document.getElementById("expActive").classList.remove("displayactivedotInActive")
        document.getElementById("expActive").classList.add("displayactivedot")


        document.getElementById("homeActive").classList.remove("displayactivedot")
        document.getElementById("homeActive").classList.add("displayactivedotInActive")
        document.getElementById("aboutActive").classList.remove("displayactivedot")
        document.getElementById("aboutActive").classList.add("displayactivedotInActive")
        document.getElementById("certActive").classList.remove("displayactivedot")
        document.getElementById("certActive").classList.add("displayactivedotInActive")
        document.getElementById("projectActive").classList.remove("displayactivedot")
        document.getElementById("projectActive").classList.add("displayactivedotInActive")
        document.getElementById("serviceActive").classList.remove("displayactivedot")
        document.getElementById("serviceActive").classList.add("displayactivedotInActive")
        document.getElementById("contactActive").classList.remove("displayactivedot")
        document.getElementById("contactActive").classList.add("displayactivedotInActive")


      }catch(err){
        console.log(err)
      }
    }


    const hoverExpLeave = (e)=>{
      try{
        document.getElementById("expHover").classList.remove("displayhoverdotActive")
        document.getElementById("expHover").classList.add("displayhoverdot")
      }catch(err){
        console.log(err)
      }
    }




        
    
    const hovercertNav = (e)=>{
      try{
        document.getElementById("certActive").classList.remove("displayactivedot")
        document.getElementById("certActive").classList.add("displayactivedotInActive")
        document.getElementById("certHover").classList.remove("displayhoverdot")
        document.getElementById("certHover").classList.add("displayhoverdotActive")


      }catch(err){
        console.log(err)
      }
    }
    const activeCert = (e)=>{
      try{
        document.getElementById("certHover").classList.remove("displayhoverdotActive")
        document.getElementById("certHover").classList.add("displayhoverdot")
        document.getElementById("certActive").classList.remove("displayactivedotInActive")
        document.getElementById("certActive").classList.add("displayactivedot")


        document.getElementById("homeActive").classList.remove("displayactivedot")
        document.getElementById("homeActive").classList.add("displayactivedotInActive")
        document.getElementById("aboutActive").classList.remove("displayactivedot")
        document.getElementById("aboutActive").classList.add("displayactivedotInActive")
        document.getElementById("expActive").classList.remove("displayactivedot")
        document.getElementById("expActive").classList.add("displayactivedotInActive")
        document.getElementById("projectActive").classList.remove("displayactivedot")
        document.getElementById("projectActive").classList.add("displayactivedotInActive")
        document.getElementById("serviceActive").classList.remove("displayactivedot")
        document.getElementById("serviceActive").classList.add("displayactivedotInActive")
        document.getElementById("contactActive").classList.remove("displayactivedot")
        document.getElementById("contactActive").classList.add("displayactivedotInActive")


      }catch(err){
        console.log(err)
      }
    }


    const hoverCertLeave = (e)=>{
      try{
        document.getElementById("certHover").classList.remove("displayhoverdotActive")
        document.getElementById("certHover").classList.add("displayhoverdot")
      }catch(err){
        console.log(err)
      }
    }





        
    const hoverprojectNav = (e)=>{
      try{
        document.getElementById("projectActive").classList.remove("displayactivedot")
        document.getElementById("projectActive").classList.add("displayactivedotInActive")
        document.getElementById("projectHover").classList.remove("displayhoverdot")
        document.getElementById("projectHover").classList.add("displayhoverdotActive")


      }catch(err){
        console.log(err)
      }
    }
    const activeProject = (e)=>{
      try{
        document.getElementById("projectHover").classList.remove("displayhoverdotActive")
        document.getElementById("projectHover").classList.add("displayhoverdot")
        document.getElementById("projectActive").classList.remove("displayactivedotInActive")
        document.getElementById("projectActive").classList.add("displayactivedot")


        document.getElementById("homeActive").classList.remove("displayactivedot")
        document.getElementById("homeActive").classList.add("displayactivedotInActive")
        document.getElementById("aboutActive").classList.remove("displayactivedot")
        document.getElementById("aboutActive").classList.add("displayactivedotInActive")
        document.getElementById("expActive").classList.remove("displayactivedot")
        document.getElementById("expActive").classList.add("displayactivedotInActive")
        document.getElementById("certActive").classList.remove("displayactivedot")
        document.getElementById("certActive").classList.add("displayactivedotInActive")
        document.getElementById("serviceActive").classList.remove("displayactivedot")
        document.getElementById("serviceActive").classList.add("displayactivedotInActive")
        document.getElementById("contactActive").classList.remove("displayactivedot")
        document.getElementById("contactActive").classList.add("displayactivedotInActive")


      }catch(err){
        console.log(err)
      }
    }


    const hoverProjectLeave = (e)=>{
      try{
        document.getElementById("projectHover").classList.remove("displayhoverdotActive")
        document.getElementById("projectHover").classList.add("displayhoverdot")
      }catch(err){
        console.log(err)
      }
    }




           
    const hoverserviceNav = (e)=>{
      try{
        document.getElementById("serviceActive").classList.remove("displayactivedot")
        document.getElementById("serviceActive").classList.add("displayactivedotInActive")
        document.getElementById("serviceHover").classList.remove("displayhoverdot")
        document.getElementById("serviceHover").classList.add("displayhoverdotActive")


      }catch(err){
        console.log(err)
      }
    }
    const activeService = (e)=>{
      try{
        document.getElementById("serviceHover").classList.remove("displayhoverdotActive")
        document.getElementById("serviceHover").classList.add("displayhoverdot")
        document.getElementById("serviceActive").classList.remove("displayactivedotInActive")
        document.getElementById("serviceActive").classList.add("displayactivedot")


        document.getElementById("homeActive").classList.remove("displayactivedot")
        document.getElementById("homeActive").classList.add("displayactivedotInActive")
        document.getElementById("aboutActive").classList.remove("displayactivedot")
        document.getElementById("aboutActive").classList.add("displayactivedotInActive")
        document.getElementById("expActive").classList.remove("displayactivedot")
        document.getElementById("expActive").classList.add("displayactivedotInActive")
        document.getElementById("certActive").classList.remove("displayactivedot")
        document.getElementById("certActive").classList.add("displayactivedotInActive")
        document.getElementById("projectActive").classList.remove("displayactivedot")
        document.getElementById("projectActive").classList.add("displayactivedotInActive")
        document.getElementById("contactActive").classList.remove("displayactivedot")
        document.getElementById("contactActive").classList.add("displayactivedotInActive")


      }catch(err){
        console.log(err)
      }
    }


    const hoverServiceLeave = (e)=>{
      try{
        document.getElementById("serviceHover").classList.remove("displayhoverdotActive")
        document.getElementById("serviceHover").classList.add("displayhoverdot")
      }catch(err){
        console.log(err)
      }
    }




               
    const hovercontactNav = (e)=>{
      try{
        document.getElementById("contactActive").classList.remove("displayactivedot")
        document.getElementById("contactActive").classList.add("displayactivedotInActive")
        document.getElementById("contactHover").classList.remove("displayhoverdot")
        document.getElementById("contactHover").classList.add("displayhoverdotActive")


      }catch(err){
        console.log(err)
      }
    }
    const activeContact = (e)=>{
      try{
        document.getElementById("contactHover").classList.remove("displayhoverdotActive")
        document.getElementById("contactHover").classList.add("displayhoverdot")
        document.getElementById("contactActive").classList.remove("displayactivedotInActive")
        document.getElementById("contactActive").classList.add("displayactivedot")


        document.getElementById("homeActive").classList.remove("displayactivedot")
        document.getElementById("homeActive").classList.add("displayactivedotInActive")
        document.getElementById("aboutActive").classList.remove("displayactivedot")
        document.getElementById("aboutActive").classList.add("displayactivedotInActive")
        document.getElementById("expActive").classList.remove("displayactivedot")
        document.getElementById("expActive").classList.add("displayactivedotInActive")
        document.getElementById("certActive").classList.remove("displayactivedot")
        document.getElementById("certActive").classList.add("displayactivedotInActive")
        document.getElementById("projectActive").classList.remove("displayactivedot")
        document.getElementById("projectActive").classList.add("displayactivedotInActive")
        document.getElementById("serviceActive").classList.remove("displayactivedot")
        document.getElementById("serviceActive").classList.add("displayactivedotInActive")


      }catch(err){
        console.log(err)
      }
    }


    const hoverContactLeave = (e)=>{
      try{
        document.getElementById("contactHover").classList.remove("displayhoverdotActive")
        document.getElementById("contactHover").classList.add("displayhoverdot")
      }catch(err){
        console.log(err)
      }
    }






  return (
    
    <div>
      {window.innerWidth>1200 ? (<div><div className='d-flex justify-content-center align-items-center m-0 Navbox'>
            <div onMouseEnter={(e)=>{hoverhomeNav(e)}} onMouseLeave={(e)=>{hoverHomeLeave(e)}} id="home" onClick={(e) => {scrollTo(homeRef); activeHome(e)}} className='m-0 Navitem'><p className='m-0'>HOME</p><img id="homeHover"className='displayhoverdot' src={hoverdot}></img><img id="homeActive" className='displayactivedot' src={activedot}></img></div>


            <div onMouseEnter={(e)=>{hoveraboutNav(e)}} onMouseLeave={(e)=>{hoverAboutLeave(e)}} id="about" onClick={(e) => {scrollTo(aboutRef); activeAbout(e) }} className='m-0 Navitem'><p className='m-0'>ABOUT ME</p><img id="aboutHover" className='displayhoverdot' src={hoverdot}></img><img id="aboutActive" className='displayactivedotInActive' src={activedot}></img></div>


            <div onMouseEnter={(e)=>{hoverexpNav(e)}} onMouseLeave={(e)=>{hoverExpLeave(e)}} id="exp" onClick={(e) => {scrollTo(expRef); activeExp(e)}} className='m-0 Navitem'><p className='m-0'>EXPERIENCE</p><img id="expHover" className='displayhoverdot' src={hoverdot}></img><img id="expActive" className='displayactivedotInActive' src={activedot}></img></div>



            <div onMouseEnter={(e)=>{hovercertNav(e)}} onMouseLeave={(e)=>{hoverCertLeave(e)}} id="cert" onClick={(e) => {scrollTo(certRef); activeCert(e) }} className='m-0 Navitem'><p className='m-0'>CERTIFICATIONS</p><img id="certHover" className='displayhoverdot' src={hoverdot}></img><img id="certActive" className='displayactivedotInActive' src={activedot}></img></div>



            <div onMouseEnter={(e)=>{hoverprojectNav(e)}} onMouseLeave={(e)=>{hoverProjectLeave(e)}} id="project" onClick={(e) => {scrollTo(projectRef); activeProject(e) }} className='m-0 Navitem'><p className='m-0'>PROJECTS</p><img id="projectHover" className='displayhoverdot' src={hoverdot}></img><img id="projectActive" className='displayactivedotInActive' src={activedot}></img></div>



            <div onMouseEnter={(e)=>{hoverserviceNav(e)}} onMouseLeave={(e)=>{hoverServiceLeave(e)}} id="service" onClick={(e) => {scrollTo(serviceRef); activeService(e) }} className='m-0 Navitem'><p className='m-0'>SERVICES</p><img id="serviceHover" className='displayhoverdot' src={hoverdot}></img><img id="serviceActive"className='displayactivedotInActive' src={activedot}></img></div>




            <div onMouseEnter={(e)=>{hovercontactNav(e)}} onMouseLeave={(e)=>{hoverContactLeave(e)}} id="contact" onClick={(e) => {scrollTo(contactRef); activeContact(e)}} className='m-0 Navitem'><p className='m-0'>CONTACT</p><img id="contactHover" className='displayhoverdot' src={hoverdot}></img><img id="contactActive" className='displayactivedotInActive' src={activedot}></img></div>

        </div>



        <div ref={homeRef} className='d-block m-0 FirstDisplay'>
            <img className='myimageposition' src={myimg}></img>

            <motion.div initial={{ opacity: 0.5, y: '30%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='firstdispline'><p className='d-inline'>LET’S BUILD SOMETHING GREAT TOGETHER</p></motion.div>
            <motion.img initial={{ opacity: 0.5, y: '30%', rotate: 50 }}
        whileInView={{ opacity: 1, y: '0%', rotate: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='firstdisplogo' src={polyBlock} loading='lazy'></motion.img>

        </div>


        <div ref={aboutRef} className='d-flex justify-content-center align-items-center aboutme'>
            <motion.div initial={{ opacity: 0.5, y: '60%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='aboutme1'>
              <p className='nametxt'>HI THERE! I’m SAMIN ARNOB.
              </p>
              <p className='aboutdetail'>I’m a professional UI/UX Designer (Major) and MERN Stack Developer.I was born in 29, September, 1996. Currently, I’m living in Dhaka, Bangladesh and opened for any remote or onsite job.Feel free to message me anytime you need.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0.5, y: '40%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='d-flex justify-content-center align-items-center aboutme2'>
              <p className='nametxt'>4 +
              </p>
              <p className='aboutdetail'>Years of Experience</p>
            </motion.div>
            <motion.div initial={{ opacity: 0.5, y: '30%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }}  className='d-flex justify-content-center align-items-center aboutme3'>
              <p className='nametxt'>29 +
              </p>
              <p className='aboutdetail'>Total Projects</p>
            </motion.div>
            <motion.div initial={{ opacity: 0.5, y: '20%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }}  className='d-flex justify-content-center align-items-center aboutme3'>
              <p className='nametxt'>11 +
              </p>
              <p className='aboutdetail'>Dribbble Projects</p>
            </motion.div>

        </div>

          <div ref={expRef} className='thirddisplay'>
            <div className='thirddisplayheader'><p>I'M EXPERIENCED IN ...</p></div>
            <motion.img initial={{ opacity: 0.5, x: '-60%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }}  className='thirdcircle' src={thirdcircle}></motion.img>
            <motion.img initial={{ opacity: 0.5, y: '50%', rotate: 30 }}
        whileInView={{ opacity: 1, y: '0%', rotate:  0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }}  className='thirdtriangle' src={thirdtriangle}></motion.img>
            <motion.img initial={{ opacity: 0.5, x: '40%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='thirdtxt' src={thirdTxt}></motion.img>
            <img className='experience' src={experience} loading='lazy'></img>
            <motion.img initial={{ opacity: 0.5, x: '30%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='thirdrect1' src={thirdrect}></motion.img>
            <motion.img initial={{ opacity: 0.5, x: '80%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='thirdrect2' src={thirdrect}></motion.img>


          </div>




          <div ref={certRef} className='fourthdisplay'>
           <div className='fourthdisplayheader'><p>CERTIFICATIONS ...</p></div>
           <motion.img initial={{ opacity: 0.5, y: '-40%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='toplinedot' src={linedot}></motion.img>
           <motion.div variants={containerVariantsDesk}
      initial="hidden"
      whileInView="show"
  viewport={{ once: false, amount: 0.3 }} className='row row-cols-1 row-cols-md-11 d-flex mx-auto justify-content-evenly mainbox flex-wrap'>
              <motion.div variants={itemVariantsDesk}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-3 firstcertificate'>
                <div className='certimgbox'><img className='imagesiz' src={certif1} loading='lazy'></img>
                <img onClick={on1} className='viewimgicon' src={viewimgicon}></img></div>
                <div className='certtxtbox'><img className='bgimgsiz' src={certboximg}></img><p className='mx-auto certname'>Complete Web & Mobile Designer
                UI/UX Figma.</p>
                <img onClick={openLink1} className='certnameclick' src={cernameclick}></img>
                </div>

              </motion.div>


              <motion.div variants={itemVariantsDesk}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-3 firstcertificate'>
                <div className='certimgbox'><img className='imagesiz' src={certif2} loading='lazy'></img>
                <img onClick={on2} className='viewimgicon' src={viewimgicon}></img></div>
                <div className='certtxtbox'><img className='bgimgsiz' src={certboximg}></img><p className='mx-auto certname'>React - The Complete Guide
                Redux, Framer, Router.</p>
                <img onClick={openLink2} className='certnameclick' src={cernameclick}></img>
                </div>

              </motion.div>

              <motion.div variants={itemVariantsDesk}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-3 firstcertificate'>
                <div className='certimgbox'><img className='imagesiz' src={certif3} loading='lazy'></img>
                <img onClick={on3} className='viewimgicon' src={viewimgicon}></img></div>
                <div className='certtxtbox'><img className='bgimgsiz' src={certboximg}></img><p className='mx-auto certname'>Learn Complete Front-End Web Development.</p>
                <img onClick={openLink3} className='certnameclick' src={cernameclick}></img>
                </div>

              </motion.div>

              <motion.div variants={itemVariantsDesk}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-3 firstcertificate'>
                <div className='certimgbox'><img className='imagesiz' src={certif4} loading='lazy'></img>
                <img onClick={on4} className='viewimgicon' src={viewimgicon}></img></div>
                <div className='certtxtbox'><img className='bgimgsiz' src={certboximg}></img><p className='mx-auto certname'>The Complete Web Developer Bootcamp
                2023.</p>
                <img onClick={openLink4} className='certnameclick' src={cernameclick}></img>
                </div>

              </motion.div>

              <motion.div variants={itemVariantsDesk}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-3 firstcertificate'>
                <div className='certimgbox'><img className='imagesiz' src={certif5} loading='lazy'></img>
                <img onClick={on5} className='viewimgicon' src={viewimgicon}></img></div>
                <div className='certtxtbox'><img className='bgimgsiz' src={certboximg}></img><p className='mx-auto certname'>React Js A-Z with Laravel For 
                Beginner - Advance.</p>
                <img onClick={openLink5} className='certnameclick' src={cernameclick}></img>
                </div>

              </motion.div>
              
           </motion.div>
           <motion.img initial={{ opacity: 0.5, y: '40%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='lastlinedot' src={linedot}></motion.img>

          </div>





          <motion.div variants={containerVariantsDesk2}
      initial="hidden"
      whileInView="show"
  viewport={{ once: false, amount: 0.3 }} ref={projectRef} className='fifthdisplay'>
          <Tooltip title="Home Rental Web and Mobile Project." placement="top" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}><motion.img variants={itemVariantsDesk2}
      transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj1}  className='firstproject roundBorder' src={proj1} loading='lazy'></motion.img></Tooltip>
            <Tooltip title="Event Management Website and Mobile Project." placement="top" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}><motion.img variants={itemVariantsDesk2}
      transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj2}  className='secondproject roundBorder' src={proj2} loading='lazy'></motion.img></Tooltip>
            <div className='d-flex justify-content-center align-items-center viewmorebox'><p>VIEW MORE</p>
            <div>
            <Tooltip title="GitHub Projects" placement="bottom" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}>
              <img className='me-2 iconsize' onClick={opengithub} src={giticon}></img>
              </Tooltip>


              <Tooltip title="Dribbble Projects" placement="bottom" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}>
              <img onClick={openDribbble} className='iconsize' src={dribblicon}></img>
              </Tooltip>

             
              
              </div>
            
            
            </div>
            <Tooltip title="Car Company Website Project." placement="top" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}><motion.img variants={itemVariantsDesk2}
      transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj3}  className='thirdproject roundBorder' src={proj3} loading='lazy'></motion.img></Tooltip>
            <Tooltip title="Real Estate Web Project." placement="top" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}><motion.img variants={itemVariantsDesk2}
      transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj4} className='fourthproject roundBorder2' src={proj4} loading='lazy'></motion.img></Tooltip>
            <Tooltip title="E-Commerce Site Business Web and Mobile Project." placement="top" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}><motion.img variants={itemVariantsDesk2}
      transition={{ duration: 0.6, ease: 'easeInOut' }} onClick={openproj5}  className='fifthproject roundBorder2' src={proj5} loading='lazy'></motion.img></Tooltip>

          </motion.div>




          <div ref={serviceRef} className='sixthDisp'>
            <img className='sixthline' src={sixthline}></img>
            <div className='serviceheader'><p>MY SERVICES</p></div>
            <motion.img initial={{ opacity: 0.5, x: '50%', rotate: 20 }}
        whileInView={{ opacity: 1, x: '0%', rotate: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='sixtri' src={sixtri}></motion.img>
            <motion.div variants={containerVariantsDesk3}
      initial="hidden"
      whileInView="show"
  viewport={{ once: false, amount: 0.3 }} className='d-flex mx-auto justify-content-start align-items-center servicebox flex-wrap'>
              <motion.div variants={itemVariantsDesk3}
      transition={{ duration: 0.6, ease: 'easeInOut' }} className='servicemain'>
                <img src={servc1} loading='lazy'></img>
                <div className='servicemaindiv mx-auto'>
                  <p className='mx-auto headingserv'>COMPLETE UI/UX PACKAGE</p>
                <ul className='listfont'>
                  <li>Complete Auto Layout and Advanced Constraints based responsive designs.</li>
                  <li>High Fidelity Prototype.</li>
                  <li>Well instructed Mockups.</li>
                  <li>Perfect Typography.</li>
                  <li>Master Components.</li>
                  <li>Custom assets.</li>
                  <li>Delivery within time.</li>
                </ul>
                <div className='pricetag'><p>4000/= Bdt</p></div>
                </div>
                
              </motion.div>


              <motion.div variants={itemVariantsDesk3}
      transition={{ duration: 0.6, ease: 'easeInOut' }} className='servicemain'>
                <img src={servc2} loading='lazy'></img>
                <div className='servicemaindiv mx-auto'>
                  <p className='mx-auto headingserv'>FRONT-END PACKAGE</p>
                <ul className='listfont'>
                  <li>Advanced ReactJs framework based web-apps or website’s frontend.</li>
                  <li>Customized full responsive CSS adjustment.</li>
                  <li>Creative web designs.</li>
                  <li>Converting Figma designs to website or web-app.</li>
                  <li>Routing and Api adjustment.</li>
                  <li>Bugless codes.</li>
                  <li>Delivery within time.</li>
                </ul>
                <div className='pricetag'><p>5000/= Bdt</p></div>
                </div>
                
              </motion.div>

              <motion.div variants={itemVariantsDesk3}
      transition={{ duration: 0.6, ease: 'easeInOut' }} className='servicemain'>
                <img src={servc3} loading='lazy'></img>
                <div className='servicemaindiv mx-auto'>
                  <p className='mx-auto headingserv'>Full-STACK PACKAGE</p>
                <ul className='listfont'>
                  <li>Advanced MERN Stack framework based web-apps or complete website.</li>
                  <li>Complete Front-end and Back-end development.</li>
                  <li>Advanced authentication and authorization.</li>
                  <li>Secured from XSS attack.</li>
                  <li>Complete Routing, Api, Database adjustment.</li>
                  <li>Bugless codes.</li>
                  <li>Delivery within time.</li>
                </ul>
                <div className='pricetag'><p>8000/= Bdt</p></div>
                </div>
                
              </motion.div>


            </motion.div>
            <motion.img initial={{ opacity: 0.5, x: '50%' }}
        whileInView={{ opacity: 1, x: '0%'}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='servhuman' src={servhuman}></motion.img>
            <motion.img initial={{ opacity: 0.5, x: '-50%', rotate: 20 }}
        whileInView={{ opacity: 1, x: '0%', rotate: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='sixrect' src={sixrect}></motion.img>
            <img className='sixlowcircl' src={sixcir}></img>

          </div>





          <div ref={contactRef} className='seventhdisp'>
            <div className='contactheader'><p>CONTACT DETAILS</p></div>
            <motion.div initial={{ opacity: 0.5, y: '30%'}}
        whileInView={{ opacity: 1, y: '0%'}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='mx-auto sometimestxt'><p>SOMETIMES ALL YOU NEED IS TO REACH OUT TO SOMEONE.</p></motion.div>
            <motion.div initial={{ opacity: 0.5, y: '100%'}}
        whileInView={{ opacity: 1, y: '0%'}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='d-flex mx-auto justify-content-center align-items-center flex-column letstalkbox'>
              <p className='firstbx'>Anytime you need help kindly message me and let me know. I’m always free to hear your ideas ...</p>
              <div className='secondbxstyle' onClick={openFacebook}><p className='secondbx'>Let’s talk in FB  →</p></div>
            </motion.div>

            <div className='d-flex justify-content-center align-items-center flex-column contacticons'>
              
              <Tooltip title="Location - Manik Nagar, Dhaka-1203, Bangladesh." placement="left" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}>
              <img className='iconsize' src={map}></img>
              </Tooltip>
          
              <Tooltip title="Dribbble Id - Samin97" placement="left" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}>
              <img className='iconsize' onClick={openDribbble} src={contactdrbble}></img>
              </Tooltip>


              <Tooltip title="Gmail - saminyeasararnob@gmail.com" placement="left" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}>
              <img className='iconsize' src={mailicon}></img>
              </Tooltip>


              <Tooltip title="Phone No - 01856161055" placement="left" arrow componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#1995AD',
            color: '#f1f1f2',
            fontFamily:'Inter',
            fontSize: tooltipSzBg,
            padding: '8px 12px',
            borderRadius: '4px',
            '& .MuiTooltip-arrow': {
              color: '#1995AD', // Arrow color matches background
            },
          },
        },
      }}>   
              <img className='iconsize' src={contactphone}></img>
              </Tooltip>

             
           
              
            </div>
          </div>


          <div className='row row-cols-1 row-cols-md-12 d-flex flex-row mx-auto justify-content-center align-items-center eightdisp gap-3'>
            <div className='col col-md-3 d-flex justify-content-start align-items-start flex-column'>
              <p className='footerheader'>REACH ME </p>
              <p className='footerbody'><b>Gmail</b> - saminyeasararnob@gmail.com<br></br>
                  <b>Phone</b> - 01856161055<br></br>
                  <b>Whatsapp</b> - 01856161055<br></br>
                  <b>Facebook</b> - https://www.facebook.com/samin.arnob.3 <br></br>
                  <b>Location</b> - Manik Nagar, Dhaka-1203, Bangladesh.<br></br>

<b>GitHub</b> - SaminKirigaya<br></br>
                  <b>Dribbble</b> - Samin97<br></br>

                  </p>

            </div>

            <div className='col col-md-3 d-flex justify-content-start align-items-start flex-column termsheight'>
              <p className='footerheader'>TERMS & CONDITIONS </p>
              <div className='overstyle'><p className='footerbody'>𝗘𝗳𝗳𝗲𝗰𝘁𝗶𝘃𝗲 𝗗𝗮𝘁𝗲: 𝟳, 𝗠𝗮𝘆, 𝟮𝟬𝟮𝟱<br></br>
              <b>&copy; All Copyright Reserved By Samin Arnob By Legal Laws.</b><br></br><br></br>
Welcome to the portfolio website of Samin Yeasar Arnob. These Terms and Conditions ("Terms") govern your use of this website, including all related content, services, and features available at this portfolio (the "Site").

By accessing or using this Site, you agree to be bound by these Terms. If you do not agree with any part of the Terms, please do not use the Site.
<br></br>

𝟭. 𝗨𝘀𝗲 𝗼𝗳 𝘁𝗵𝗲 𝗦𝗶𝘁𝗲<br></br>
You are permitted to view, browse, and interact with this Site for personal or professional interest in the work of Samin Yeasar Arnob. You agree not to:

Use the Site in any way that is unlawful or harms us or any third party.

Attempt to gain unauthorized access to any portion or feature of the Site.

Use automated systems or software to extract data from the Site for commercial purposes.
<br></br>

𝟮. 𝗜𝗻𝘁𝗲𝗹𝗹𝗲𝗰𝘁𝘂𝗮𝗹 𝗣𝗿𝗼𝗽𝗲𝗿𝘁𝘆<br></br>
All content on this Site — including but not limited to code samples, project descriptions, text, graphics, logos, and images — is the intellectual property of Samin Yeasar Arnob unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited without written permission.

<br></br>
𝟯. 𝗧𝗵𝗶𝗿𝗱-𝗣𝗮𝗿𝘁𝘆 𝗟𝗶𝗻𝗸𝘀<br></br>
This Site may contain links to third-party websites or resources. We are not responsible for the content, availability, or practices of such external sites and do not endorse them. You access these websites at your own risk.

<br></br>
𝟰. 𝗡𝗼 <br></br>
This Site and its content are provided "as is" and "as available" without any warranties, express or implied. While we strive to ensure accuracy, we make no guarantees regarding the completeness, reliability, or availability of the content.

<br></br>
𝟱. 𝗟𝗶𝗺𝗶𝘁𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗟𝗶𝗮𝗯𝗶𝗹𝗶𝘁𝘆<br></br>
To the fullest extent permitted by law, Samin Yeasar Arnob shall not be liable for any damages arising out of or related to your use of, or inability to use, this Site or its content.
<br></br>

𝟲. 𝗖𝗵𝗮𝗻𝗴𝗲𝘀 𝘁𝗼 𝗧𝗵𝗲𝘀𝗲 𝗧𝗲𝗿𝗺𝘀<br></br>
We may update or revise these Terms at any time without notice. By continuing to use the Site after changes are made, you accept the revised Terms.
<br></br>
𝟳. 𝗖𝗼𝗻𝘁𝗮𝗰𝘁<br></br>
If you have any questions about these Terms, you may contact me at:
📧 [saminyeasararnob@gmail.com]



                  </p></div>

            </div>


            <div className='col col-md-3 d-flex justify-content-start align-items-start flex-column'>
              <p className='footerheader'>PAYMENT METHODS </p>
              <div className='d-flex flex-row flex-wrap gap-3'>
              <motion.img initial={{ opacity: 0.5, y: '30%'}}
        whileInView={{ opacity: 1, y: '0%'}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='eightimg' style={{borderRadius:0.7+'rem'}} src={bkash} loading='lazy'></motion.img>
              <motion.img initial={{ opacity: 0.5, y: '30%'}}
        whileInView={{ opacity: 1, y: '0%'}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='eightimg' style={{borderRadius:0.7+'rem'}} src={nogod} loading='lazy'></motion.img>
              <motion.img initial={{ opacity: 0.5, y: '30%'}}
        whileInView={{ opacity: 1, y: '0%'}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='eightimg' style={{borderRadius:0.7+'rem'}} src={cod} loading='lazy'></motion.img>
              <motion.img initial={{ opacity: 0.5, y: '30%'}}
        whileInView={{ opacity: 1, y: '0%'}}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }} className='eightimg' style={{borderRadius:0.7+'rem'}} src={payoneer} loading='lazy'></motion.img>
              </div>
              

            </div>


          </div>




          <div id="overlay1" onClick={off1}>
            <div id="overlayimage"><img src={certf1} loading='lazy'></img></div>
          </div>
          <div id="overlay2" onClick={off2}>
            <div id="overlayimage"><img src={certf2} loading='lazy'></img></div>
          </div>
          <div id="overlay3" onClick={off3}>
            <div id="overlayimage"><img src={certf3} loading='lazy'></img></div>
          </div>
          <div id="overlay4" onClick={off4}>
            <div id="overlayimage"><img src={certf4} loading='lazy'></img></div>
          </div>
          <div id="overlay5" onClick={off5}>
            <div id="overlayimage"><img src={certf5} loading='lazy'></img></div>
          </div></div> ) :  null}   


              
          {window.innerWidth<1200 ? (
            <BrowserRouter>


              <div className='rootdisp'>
                
                <div className='d-flex justify-content-center align-items-center headbox'><p>WELCOME GUEST!</p></div>

                <div className='maincontentbox'>

                <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/experience' element={<Experience />}></Route>
                  <Route path='/certifications' element={<Certifications />}></Route>
                  <Route path='/projects' element={<Projects />}></Route>
                  <Route path='/services' element={<Services />}></Route>
                  <Route path='/contact' element={<Contact />}></Route>
                </Routes>
               

                </div>

                <div className='mx-auto menubox'>
                  <Link to="/" className='d-flex justify-content-center align-items-center menuitem'><img src={homeicon}></img></Link>
                  <Link to="/about" className='d-flex justify-content-center align-items-center menuitem'><img className='img2' src={infoicon}></img></Link>
                  <Link to="/experience" className='d-flex justify-content-center align-items-center menuitem'><img src={expicon}></img></Link>
                  <Link to="/certifications" className='d-flex justify-content-center align-items-center menuitem'><img src={certicon}></img></Link>
                  <Link to="/projects" className='d-flex justify-content-center align-items-center menuitem'><img src={projectsicon}></img></Link>
                  <Link to="/services" className='d-flex justify-content-center align-items-center menuitem'><img src={serviceicon}></img></Link>
                  <Link to="/contact" className='d-flex justify-content-center align-items-center menuitem'><img src={contacticon}></img></Link>
                </div>

              
              
              </div>



            </BrowserRouter>
            
          ) : null}



          <div id="overlay1" onClick={off1}>
            <div id="overlayimage"><img src={certf1} loading='lazy'></img></div>
          </div>
          <div id="overlay2" onClick={off2}>
            <div id="overlayimage"><img src={certf2} loading='lazy'></img></div>
          </div>
          <div id="overlay3" onClick={off3}>
            <div id="overlayimage"><img src={certf3} loading='lazy'></img></div>
          </div>
          <div id="overlay4" onClick={off4}>
            <div id="overlayimage"><img src={certf4} loading='lazy'></img></div>
          </div>
          <div id="overlay5" onClick={off5}>
            <div id="overlayimage"><img src={certf5} loading='lazy'></img></div>
          </div>
    </div>
    
  )
}
