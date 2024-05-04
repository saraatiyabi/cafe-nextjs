import WithNavigation from '@/components/HOC/WithNavigation'
import Header from '@/components/modules/Header/Header'
import OurMenu from '@/components/modules/OurMenu'
import React from 'react'

const Menu = ({ data }) => {
    return (
        <div>
            <Header pageName="Our Menu" pageLink="/menu" />
            <OurMenu menu={data.menuData} />
        </div>
    )
}

export async function getStaticProps() {
    const navbarResponse = await fetch("http://localhost:4000/menuItems");
    const menuResponse = await fetch("http://localhost:4000/menu")

    const navbarItems = await navbarResponse.json();
    const menuData = await menuResponse.json();

    return {
        props: {
            data: {
                navbarItems,
                menuData
            }
        },
        revalidate: 12 * 60 * 60
    }
}

export default WithNavigation(Menu);