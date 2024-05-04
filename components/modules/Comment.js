import React from 'react'

const Comment = ({ img, comment, name }) => {
  console.log(comment)
  return (
    <div className='flex flex-row gap-2 items-center'>
      <img src={img} className='rounded-full' />
      <div className='flex flex-col'>
        <h4 className='text-primary text-2xl'>{name}</h4>
        <p className='text-primary'>{comment}</p>
      </div>
    </div>
  )
}

export default Comment