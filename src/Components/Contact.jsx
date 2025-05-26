import React from 'react'
import {motion} from "framer-motion"
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';

import contactdrbble from '../Images/logos_dribbble-icon.png'
import gitcontact from '../Images/mdi_github.png'
import contactphone from '../Images/gg_phone.png'
import map from '../Images/bxs_map.png'

import payoneer from '../Images/lineicons_payoneer.png'
import bkash from '../Images/bkash.png'
import nogod from '../Images/nogod.png'
import cod from '../Images/cash on delivery.png'
import mailicon from '../Images/basil_gmail-solid.png'

const openFacebook = ()=>{
    window.open('https://www.facebook.com/samin.arnob.3', 'Certificate');
    return false
  }
  const openDribbble = ()=>{
    window.open('https://dribbble.com/Samin97', 'Certificate');
    return false
  }

  

  
export default function Contact() {
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
    
  }, [])

  return (
    <div className='contact'>
        <div className='mx-auto heading'><p>CONTACT DETAILS ...</p></div>
        <motion.div initial={{ opacity: 0.5, y: '30%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='mx-auto sometimestxt'><p>SOMETIMES ALL YOU NEED IS TO REACH OUT TO SOMEONE.</p></motion.div>
        <motion.div initial={{ opacity: 0.5, y: '80%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='mx-auto undersometimetxt'>
            <p>Anytime you need help kindly message me and let me know. I’m always free to hear your ideas ...</p>
            <div onClick={openFacebook} className='mx-auto letstalkBtn'><p>Let’s talk in FB  →</p></div>
        </motion.div>

        <div className='d-flex justify-content-center align-items-center flex-column contactlogos'>
            <Tooltip trigger={['hover', 'click', 'focus']} title="Location - Manik Nagar, Dhaka - 1203, Bangladesh." placement="left" arrow componentsProps={{
                    tooltip: {
                      sx: {
                        maxWidth: '74vw !important',
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
                  }}><img  onContextMenu={(e) => e.preventDefault()} src={map}></img></Tooltip>
            
            <Tooltip trigger={['hover', 'click', 'focus']} title="Phone - 01856161055" placement="left" arrow componentsProps={{
                    tooltip: {
                      sx: {
                        maxWidth: '74vw !important',
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
                  }}><img  onContextMenu={(e) => e.preventDefault()} src={contactphone}></img></Tooltip>
            <Tooltip trigger={['hover', 'click', 'focus']} title="Gmail - saminyeasararnob@gmail.com" placement="left" arrow componentsProps={{
                    tooltip: {
                      sx: {
                        maxWidth: '74vw !important',
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
                  }}><img  onContextMenu={(e) => e.preventDefault()} src={mailicon}></img></Tooltip>
            <Tooltip trigger={['hover', 'click', 'focus']} title="Dribbble Username - Samin97" placement="left" arrow componentsProps={{
                    tooltip: {
                      sx: {
                        maxWidth: '74vw !important',
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
                  }}><img  onContextMenu={(e) => e.preventDefault()} onClick={openDribbble} src={contactdrbble}></img></Tooltip>

        </div>

        <div className='row row-cols-1 row-cols-md-12 d-flex justify-content-center align-items-center footerbox'>
          <div className='col col-md-8 coldetail1'>
            <p className='headtxtcont'>REACH ME </p>
            <p className='detailtxtcont'>
            <b>Gmail </b>- saminyeasararnob@gmail.com<br></br>
<b>Phone</b> - 01856161055<br></br>
<b>Whatsapp</b> - 01856161055<br></br>
<b>Location</b> - Manik Nagar, Dhaka, Bangladesh.<br></br><br></br>

<b>GitHub Username</b> - SaminKirigaya<br></br>
<b>Dribbble Username</b> - Samin97<br></br>


            </p>
          </div>


          <div className='col col-md-8 coldetail'>
          <p className='headtxtcont'>TERMS & CONDITIONS</p>
          <p className='detailtxtcont'>
          𝗘𝗳𝗳𝗲𝗰𝘁𝗶𝘃𝗲 𝗗𝗮𝘁𝗲: 𝟳, 𝗠𝗮𝘆, 𝟮𝟬𝟮𝟱<br></br>
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
          </p>
          </div>


          <div className='col col-md-8 coldetail paygap'>
          <p className='headtxtcont'>PAYMENT METHODS</p>
            <motion.img initial={{ opacity: 0.5, y: '30%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='me-2' src={bkash} loading='lazy'></motion.img>
            <motion.img initial={{ opacity: 0.5, y: '30%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='me-2' src={nogod} loading='lazy'></motion.img>
            <motion.img initial={{ opacity: 0.5, y: '30%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='me-2' src={payoneer} loading='lazy'></motion.img>
            <motion.img initial={{ opacity: 0.5, y: '30%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} src={cod} loading='lazy'></motion.img>
          </div>

        </div>
      
    </div>
  )
}
