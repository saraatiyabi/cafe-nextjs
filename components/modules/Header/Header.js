import Link from 'next/link'
import React from 'react'
import styled from "./Header.module.css";

const Header = ({ pageName, pageLink }) => {
    return (
        <div className={`w-full ${styled.header__gradient} text-white h-[400px] flex justify-center items-center flex-col relative`}>
            <h1 className='text-[60px] font-semibold uppercase'>{pageName}</h1>
            <p className='flex flex-row items-center gap-2 font-primary'>
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href={pageLink}>{pageName}</Link>
            </p>
            <div className='bg-[url("/img/overlay-bottom.png")] bg-repeat-x absolute -bottom-7  w-full object-cover z-10 h-10' />
        </div>
    )
}

export default Header