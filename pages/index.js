import React from 'react'
import AboutUs from '@/components/modules/AboutUs'
import OurMenu from '@/components/modules/OurMenu'
import Offer from '@/components/templates/Home/Offer/Offer'
import OurServices from '@/components/modules/OurServices'
import Slider from '@/components/templates/Home/Slider'
import TestimonialsSection from '@/components/modules/TestimonialsSection'
import ReservationForm from '@/components/modules/Reservation/ReservationForm'
import WithNavigation from '@/components/HOC/WithNavigation'

const Index = ({ data }) => {
  return (
    <div className='w-full relative flex flex-col'>
      <div className='w-full relative'>
        <Slider />
        <div className='bg-[url("/img/overlay-bottom.png")] bg-repeat-x absolute -bottom-7  w-full object-cover z-10 h-10' />
      </div>
      <AboutUs />
      <OurServices services={data.services} />
      <div className='w-full relative'>
        <div className='bg-[url("/img/overlay-top.png")] bg-repeat-x absolute top-0  w-full object-cover z-20 h-10' />
        <Offer />
        <div className='bg-[url("/img/overlay-bottom.png")] bg-repeat-x absolute -bottom-7  w-full object-cover z-10 h-10' />
      </div>
      <OurMenu menu={data.menu} />
      <div className='w-full relative'>
        <div className='bg-[url("/img/overlay-top.png")] bg-repeat-x absolute top-0  w-full object-cover z-20 h-10' />
        <ReservationForm />
        <div className='bg-[url("/img/overlay-bottom.png")] bg-repeat-x absolute -bottom-7  w-full object-cover z-10 h-10' />
      </div>
      <TestimonialsSection clients={data.clients} />
    </div>
  )
}

export async function getStaticProps() {
  const servicesRes = await fetch("http://localhost:4000/services")
  const navbarRes = await fetch("http://localhost:4000/menuItems")
  const menuRes = await fetch("http://localhost:4000/menu")
  const clientsRes = await fetch("http://localhost:4000/clients")

  const services = await servicesRes.json();
  const navbarItems = await navbarRes.json();
  const menu = await menuRes.json();
  const clients = await clientsRes.json();

  return {
    props: {
      data: {
        navbarItems,
        services,
        menu,
        clients,
      }
    },
    revalidate: 12 * 60 * 60
  }
}

export default WithNavigation(Index);