import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import styled from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Navbar = ({ data }) => {
    const router = useRouter()
    const [submenuStatus, setSubmenuStatus] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (router.query) {
            setSearchTerm(router.query.q)
        }
    }, [])

    const searchHandler = () => {
        if (searchTerm.trim()) {
            router.push(`/search?q=${searchTerm}`)
        }
    }

    const searchHandlerOnEnter = (e) => {
        if (e.key === "Enter") {
            router.push(`/search?q=${searchTerm}`)
        }
    }

    return (
        <nav className='w-full flex justify-between items-center py-6 px-14 font-primary absolute top-0 z-10'>
            <div className='flex flex-row items-center gap-10'>
                <a href="#" className="text-3xl font-bold uppercase text-white">Next Coffee</a>
                <div className='flex flex-row items-center gap-0'>
                    <input
                        type='text'
                        className="bg-transparent border-b-2 text-white border-gray-200 px-3 py-2 font-primary text-md outline-none"
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        onKeyDown={searchHandlerOnEnter}
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={searchHandler} className='text-white hover:text-secondary cursor-pointer text-lg' />
                </div>
            </div>
            <ul className="flex flex-row items-center gap-8">
                {
                    data?.map((menu) => (
                        <li className="relative" key={menu.id}>
                            {
                                !menu.submenu ? (
                                    <Link
                                        href={menu.href}
                                        className={`cursor-pointer text-lg font-semibold ${menu.href === router.pathname ? "text-secondary" : "text-white"} ${styled.navlink}`}>
                                        {menu.title}
                                    </Link>
                                ) : (
                                    <div className='flex flex-row items-center gap-2'>
                                        <span
                                            onClick={() => setSubmenuStatus(true)}
                                            className={`cursor-pointer text-lg font-semibold ${menu.active ? "text-secondary" : "text-white"} ${styled.navlink}`}>
                                            {menu.title}
                                        </span>
                                        <FontAwesomeIcon icon={faCaretDown} className='text-white text-md' />
                                    </div>
                                )
                            }
                            {
                                menu.submenu && (
                                    <ul
                                        className={`absolute top-10 bg-white ${submenuStatus ? "visible" : "hidden"}`}
                                        onMouseLeave={() => setSubmenuStatus(false)}
                                    >
                                        {
                                            menu.submenu.map((submenu) => (
                                                <li className="cursor-pointer text-md my-1 hover:bg-gray-100 px-5 py-2" key={submenu.id}>
                                                    <Link href={submenu.href}>
                                                        {submenu.title}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}



export default Navbar