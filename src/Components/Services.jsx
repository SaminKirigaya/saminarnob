import React from 'react'
import {motion} from "framer-motion"
import servc1 from '../Images/service1img.png'
import servc2 from '../Images/service2img.png'
import servc3 from '../Images/service3img.png'
import servhuman from '../Images/sevice human.png'
import sixrect from '../Images/sixth rect.png'
import sixcir from '../Images/sixthcircle.png'
import sixtri from '../Images/sixthtriangle.png'


const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // delay between each child
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: '35%' },
    show: { opacity: 1, x: '0%'},
  };
  

export default function Services() {
  return (
    <div className='services'>
        <div className='mx-auto heading'><p>SERVICES ...</p></div>
        <motion.div variants={containerVariants}
      initial="hidden"
      animate="show" className='row row-cols-1 row-cols-md-12 mx-auto servicebox'>


            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-5 servicecard'>
                <img className='serviceimage' src={servc1} loading='lazy'></img>
                <div className='mx-auto servicetext'>
                    <p className='headingline'>COMPLETE UI/UX PACKAGE</p>
                    <ul className='bodyline'>
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




            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-5 servicecard'>
                <img className='serviceimage' src={servc2} loading='lazy'></img>
                <div className='mx-auto servicetext'>
                    <p className='headingline'>FRONT-END PACKAGE</p>
                    <ul className='bodyline'>
                        <li>Advanced ReactJs framework based web-apps or website’s frontend.</li>
                        <li>Customized full responsive CSS adjustment.</li>
                        <li>Creative web designs.</li>
                        <li>Converting Figma designs to website or web-app.</li>
                        <li>Routing and Api adjustment.</li>
                        
                        <li>Delivery within time.</li>
                    </ul>
                    <div className='pricetag'><p>5000/= Bdt</p></div>
                </div>

            </motion.div>



            <motion.div variants={itemVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className='col col-md-5 servicecard'>
                <img className='serviceimage' src={servc3} loading='lazy'></img>
                <div className='mx-auto servicetext'>
                    <p className='headingline'>Full-STACK PACKAGE</p>
                    <ul className='bodyline'>
                        <li>Advanced MERN Stack framework based web-apps or complete website.</li>
                        <li>Complete Front-end and Back-end development.</li>
                        <li>Advanced authentication and authorization.</li>
                        <li>Secured from XSS attack.</li>
                        <li>Complete Routing, Api, Database adjustment.</li>
                        
                        <li>Delivery within time.</li>
                    </ul>
                    <div className='pricetag'><p>9000/= Bdt</p></div>
                </div>

            </motion.div>





        </motion.div>

        <motion.img initial={{ opacity: 0.5, y: '-30%', rotate: 60 }}
  whileInView={{ opacity: 1, y: '0%', rotate : 0 }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='sixtripos' src={sixtri}></motion.img>

        <motion.img initial={{ opacity: 0.5, y: '40%' }}
  whileInView={{ opacity: 1, y: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='sixrectpos' src={sixrect}></motion.img>
        <motion.img initial={{ opacity: 0.5, x: '30%' }}
  whileInView={{ opacity: 1, x: '0%' }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }} className='sixhumanpos' src={servhuman}></motion.img>
      
    </div>
  )
}
