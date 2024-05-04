import ProductCard from '@/components/modules/ProductCard/ProductCard'
import React from 'react'

const OurMenu = ({ menu }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center py-10 bg-light">
            <div className="w-[3px] h-[120px] bg-secondary rounded-xl"></div>
            <h3 className='uppercase text-3xl text-secondary py-5 font-semibold'>Menu & Pricing</h3>
            <h2 className="text-primary text-[60px] font-bold">Competitive Pricing</h2>
            <div className='max-w-[1100px] flex flex-row justify-center items-center mt-5'>
                <div className='flex-1 flex flex-col'>
                    <h3 className='text-3xl my-3 font-semibold'>Hot Coffee</h3>
                    <ul className='flex flex-col gap-5'>
                        {
                            menu.filter(menuItem => menuItem.type === "hot").slice(0, 3).map(menuItem => (
                                <ProductCard key={menuItem.id} {...menuItem} />
                            ))
                        }
                    </ul>
                </div>
                <div className='flex-1 flex flex-col'>
                    <h3 className='text-3xl my-3 font-semibold'>Cold Coffee</h3>
                    <ul className='flex flex-col gap-5'>
                        {
                            menu.filter(menuItem => menuItem.type === "cold").slice(0, 3).map(menuItem => (
                                <ProductCard key={menuItem.id} {...menuItem} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurMenu