import ClientCard from '@/components/modules/ClientCard/ClientCard'
import React, { useState } from 'react'
import Pagination from './Pagination'

const TestimonialsSection = ({ clients }) => {
    const [shownClients, setShownClients] = useState([])
    return (
        <div className="w-full flex flex-col justify-center items-center py-10 bg-light">
            <div className="w-[3px] h-[120px] bg-secondary rounded-xl"></div>
            <h3 className='uppercase text-3xl text-secondary py-5 font-semibold'>TESTIMONIAL</h3>
            <h2 className="text-primary text-[60px] font-bold">Our Clients Say</h2>

            <div className='flex flex-col max-w-[1500px] justify-center items-center my-10'>
                {
                    shownClients.map(client => (
                        <ClientCard {...client} key={client.id} />
                    ))
                }
            </div>
            <Pagination clients={clients} setShownClients={setShownClients} />
        </div>
    )
}

export default TestimonialsSection