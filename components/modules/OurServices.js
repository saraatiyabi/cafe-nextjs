import React from 'react';
import ServiceCard from '@/components/modules/ServiceCard/ServiceCard';

const OurServices = ({ services }) => {
    return (
        <div className="w-full flex justify-center items-center flex-col py-10 bg-light">
            <div className="w-[3px] h-[120px] bg-secondary rounded-xl"></div>
            <div className="w-full flex flex-col justify-center items-center mt-5">
                <h3 className="font-semibold uppercase text-secondary text-2xl">Our Services</h3>
                <h1 className="font-bold text-primary text-5xl my-5">
                    Fresh & Organic Beans
                </h1>
            </div>
            <div className='flex flex-row max-w-[1100px] flex-wrap  justify-between mt-10 items-center'>
                {
                    services?.map(service => (
                        <ServiceCard key={service.id} {...service} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurServices