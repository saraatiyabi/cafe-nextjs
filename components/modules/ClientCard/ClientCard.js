import React from 'react'

const ClientCard = ({ id, name, profession, img, comment }) => {
    return (
        <div className="w-full">
            <div className="flex items-center mb-3">
                <img className="img-fluid" src={img} alt="" />
                <div className="ml-3">
                    <h4 className='text-xl font-semibold'>{name}</h4>
                    <i className='text-gray-700'>{profession}</i>
                </div>
            </div>
            <p className="my-2 text-gray-700 font-primary">{comment}</p>
        </div>
    )
}

export default ClientCard