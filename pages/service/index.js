import WithNavigation from '@/components/HOC/WithNavigation'
import Header from '@/components/modules/Header/Header'
import Navbar from '@/components/modules/Navbar/Navbar'
import OurServices from '@/components/modules/OurServices'
import React from 'react'

const Service = ({ data }) => {
  return (
    <div className='w-full relative'>
      <Header pageName="Our Services" pageLink="/services" />
      <OurServices services={data.servicesData} />
    </div>
  )
}

export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:4000/menuItems");
  const navbarItems = await menuResponse.json()
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json()

  return {
    props: {
      data: {
        navbarItems,
        servicesData
      }
    },
    revalidate: 12 * 60 * 60
  }
}

export default WithNavigation(Service);