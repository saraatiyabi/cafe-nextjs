import Comment from '@/components/modules/Comment'
import { getStaticProps } from '@/pages'
import React from 'react'

const ProductComments = ({ productComments }) => {
  console.log(productComments)
  return (
    <div className='flex flex-col justify-center items-center gap-5 py-[50px] max-w-[1200px]'>
      <div className='flex justify-center items-center flex-col'>
        <h3 className='uppercase text-3xl text-secondary py-5 font-semibold'>What Our Customers Say</h3>
      </div>
      {
        productComments?.map(comment => (
          <Comment {...comment} />
        ))
      }
    </div >
  )
}
export default ProductComments