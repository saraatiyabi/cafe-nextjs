import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = (productData) => {
    return (
        <div className={`h-100vh w-full flex relative justify-center items-center text-white pb-[100px] pt-[150px]`}>
            <div className='max-w-[1200px] flex flex-row items-center gap-0'>
                <div className='flex-1'>
                    <img className='w-[350px] rounded-md' src={productData?.img} />
                </div>
                <div className='flex-1 flex flex-col'>
                    <h3 className='text-3xl font-semibold border-b-2 border-b-lightgray py-3'>{productData?.title}</h3>
                    <div className='flex flex-row items-center px-1 pt-5'>
                        {
                            Array.from({ length: Math.floor(productData?.score) }).fill(0).map(item => (
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                            ))
                        }
                        {
                            Array.from({ length: Math.ceil(5 - productData?.score) }).fill(0).map(item => (
                                <FontAwesomeIcon icon={faStar} style={{ color: 'lightgray', }} />
                            ))
                        }
                    </div>
                    <div className='pt-3'>
                        {
                            productData?.off ? (<>
                                <p className='font-primary text-xl font-semibold'>{productData?.price - productData?.price * productData?.off}$</p>
                                <p className='font-primary text-xl font-semibold'>{productData?.price}$</p>
                            </>) : <p className='font-primary text-xl font-semibold'>{productData?.price}$</p>
                        }
                    </div>
                    <p className='font-primary text-lg text-light py-5'>{productData?.desc}</p>
                    <button className='w-full bg-darkPrimary text-light font-semibold py-3 rounded-sm transition-colors hover:bg-[#010000e6]'>
                        <span className='pr-2'>Buy</span>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </div>
            <div className='bg-[url("/img/overlay-bottom.png")] bg-repeat-x absolute bottom-[-27px]  w-full object-cover z-20 h-10' />
        </div>
    )
}

export default ProductDetails