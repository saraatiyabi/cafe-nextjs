import Link from 'next/link'
import React from 'react'

const ProductCard = ({ id, img, title, price, desc }) => {
    return (
        <li className='flex flex-row items-center gap-5'>
            <div className='relative max-w-[170px] min-w-[140px] h-[130px]'>
                <img src={img} className='w-[120px] h-[120px] rounded-full' />
                <span className='w-10 h-10 bg-secondary rounded-full absolute top-0 right-0 z-20 flex justify-center items-center'>{price}$</span>
            </div>
            <div>
                <Link href={`/product/${id}`}>
                    <h4 className='text-2xl font-semibold'>{title}</h4>
                </Link>
                <p className="text-gray-700 font-primary text-md mt-3">{desc}</p>
            </div>
        </li>
    )
}

export default ProductCard