import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
    faCheck
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col py-10 bg-light">
            <div className="w-[3px] h-[120px] bg-secondary rounded-xl"></div>
            <div className="w-full flex flex-col justify-center items-center mt-5">
                <h3 className="font-semibold uppercase text-secondary text-2xl">about us</h3>
                <h1 className="font-bold text-primary text-5xl my-3">Serving Since 1950</h1>
            </div>
            <div className='max-w-[1100px] flex flex-row items-center mt-10 gap-3'>
                <div className='flex-1'>
                    <h3 className="text-4xl mb-5 text-primary font-bold">Our Story</h3>
                    <p className="text-black font-semibold text-xl font-primary mb-3">
                        Eos kasd eos dolor vero vero,
                        lorem stet diam rebum. Ipsum amet sed vero dolor sea
                    </p>
                    <p className='text-md font-primary text-gray-500'>
                        Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
                        nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
                        Est nonumy sed labore eirmod sit magna.
                        Erat at est justo sit ut. Labor diam sed ipsum et eirmod
                    </p>
                    <button className="bg-primary text-white font-semibold px-5 py-2 my-5">Learn More</button>
                </div>
                <div className='flex-[1.5]'>
                    <img src='/img/about.png' className='w-full h-full object-cover' />
                </div>
                <div className='flex-1'>
                    <h3 className="text-4xl mb-5 text-primary font-bold">Our Vision</h3>
                    <p className='text-md font-primary text-gray-600'>
                        Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                        justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                        Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                    </p>
                    <ul>
                        <li className="flex flex-row items-center gap-3 my-2">
                            <FontAwesomeIcon icon={faCheck} size="lg" className='text-secondary' />
                            <p className='text-xl font-semibold text-primary'>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li className="flex flex-row items-center gap-3 my-2">
                            <FontAwesomeIcon icon={faCheck} size="lg" className='text-secondary' />
                            <p className='text-xl font-semibold text-primary'>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li className="flex flex-row items-center gap-3 my-2">
                            <FontAwesomeIcon icon={faCheck} size="lg" className='text-secondary' />
                            <p className='text-xl font-semibold text-primary'>Lorem ipsum dolor sit amet</p>
                        </li>
                    </ul>
                    <button className="bg-secondary text-primary font-bold px-5 py-2 my-5">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs