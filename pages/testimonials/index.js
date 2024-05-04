import WithNavigation from '@/components/HOC/WithNavigation'
import Header from '@/components/modules/Header/Header'
import Navbar from '@/components/modules/Navbar/Navbar'
import TestimonialsSection from '@/components/modules/TestimonialsSection'
import React from 'react'

const Testimonials = ({ data }) => {
    return (
        <div>
            <Header pageName="Testimonials" pageLink="/testimonials" />
            <TestimonialsSection clients={data.clientsData} />
        </div>
    )
}

export async function getStaticProps() {
    const menuRes = await fetch("http://localhost:4000/menuItems");
    const clientsRes = await fetch("http://localhost:4000/clients");
    const navbarItems = await menuRes.json()
    const clientsData = await clientsRes.json()

    return {
        props: {
            data: {
                navbarItems,
                clientsData
            }
        },
        revalidate: 12 * 60 * 60
    }
}

export default WithNavigation(Testimonials)