import React, { useState } from 'react'
import styled from './Offer.module.css';

const Offer = () => {
    const [email, setEmail] = useState("");

    const addEmail = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:4000/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })

        if (res.status === 201) {
            alert("You joined the newsletter successfully!")
            setEmail("")
        }
    }
    return (
        <div className={`w-full ${styled.offer__gradient} relative flex flex-col justify-center items-center py-20`}>
            <div className="z-30">
                <h1 className="text-[80px] text-secondary z-20 text-center font-semibold">50% OFF</h1>
                <h2 className='text-[40px] text-white font-bold text-center'>Sunday Special Offer</h2>
                <h3 className='text-white my-5 text-2xl text-center'>Only for Sunday from 1st Jan to 30th Jan 2045</h3>
                <div className='flex items-center justify-center my-5'>
                    <input
                        type="text"
                        placeholder='Your Email...'
                        className='py-3 px-5 bg-white '
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button className='bg-secondary py-3 px-5' onClick={addEmail}>JOIN</button>
                </div>
            </div>
        </div>
    )
}

export default Offer