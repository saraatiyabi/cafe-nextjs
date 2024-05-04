import React from 'react'
import styled from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={`w-full flex flex-row justify-center items-center ${styled.footer__gradient} text-white relative pt-20`}>
            <div className='bg-[url("/img/overlay-top.png")] bg-repeat-x absolute top-0  w-full object-cover z-20 h-10' />

            <div className='w-full max-w-[1200px] flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center gap-5'>
                    <div className='flex-1 flex flex-col'>
                        <h3 className='font-semibold text-2xl mb-3 uppercase'>Get in touch</h3>
                        <div className='flex flex-row items-center gap-2'>
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                            <p className="text-md font-primary my-2">123 Street, New York, USA</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <p className="text-md font-primary my-2">+012 345 67890</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className="text-md font-primary my-2">info@example.com</p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <h3 className='font-semibold text-2xl mb-3 uppercase'>Follow Us</h3>
                        <p className="text-md font-primary my-2">Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                        <div className='flex flex-row items-center gap-3 mt-5'>
                            <span className='w-12 h-12 flex justify-center items-center border-2 p-2 border-white cursor-pointer hover:bg-white hover:text-black'>
                                <FontAwesomeIcon icon={faTwitter} className='text-xl' />
                            </span>
                            <span className='w-12 h-12 flex justify-center items-center border-2 p-2 border-white cursor-pointer hover:bg-white hover:text-black'>
                                <FontAwesomeIcon icon={faFacebook} className='text-xl' />
                            </span>
                            <span className='w-12 h-12 flex justify-center items-center border-2 p-2 border-white cursor-pointer hover:bg-white hover:text-black'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-xl' />
                            </span>
                            <span className='w-12 h-12 flex justify-center items-center border-2 p-2 border-white cursor-pointer hover:bg-white hover:text-black'>
                                <FontAwesomeIcon icon={faInstagram} className='text-xl' />
                            </span>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <h3 className='font-semibold text-2xl mb-3 uppercase'>Open Hours</h3>
                        <p className="text-md font-primary my-2">MONDAY - FRIDAY </p>
                        <p className="text-md font-primary my-2">8.00 AM - 8.00 PM</p>
                        <p className="text-md font-primary my-2">SATURDAY - SUNDAY</p>
                        <p className="text-md font-primary my-2">2.00 PM - 8.00 PM</p>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <h3 className='font-semibold text-2xl mb-3 uppercase'>Newsletter</h3>
                        <p className="text-md font-primary my-2">Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                        <div className='flex flex-row items-center my-3'>
                            <input type='text' placeholder='email...' className='p-3' />
                            <button className='p-3 bg-secondary text-black font-semibold uppercase'>Join</button>
                        </div>
                    </div>
                </div>
                <div className="my-5 w-full flex justify-center items-center flex-col pt-10 border-t-2 border-opacity-10 border-gray-300 mt-10">
                    <p className="text-md font-primary my-2">Copyright © <span className='text-secondary font-semibold'>Domain</span>. All Rights Reserved.</p>
                    <p className="text-md font-primary my-2">Designed By <span className='text-secondary font-semibold'>Sara Atiyabi</span></p>
                </div>
            </div>
        </div >
    )
}

export default Footer