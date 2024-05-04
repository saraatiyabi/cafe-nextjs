import WithNavigation from '@/components/HOC/WithNavigation'
import Header from '@/components/modules/Header/Header'
import Navbar from '@/components/modules/Navbar/Navbar'
import ReservationForm from '@/components/modules/Reservation/ReservationForm'
import React from 'react'

const Reservation = ({ data }) => {
  return (
    <div>
      <Header pageName="Reservation" pageLink="/reservation" />
      <div className='w-full relative py-10 bg-light'>
        <div className='bg-[url("/img/overlay-top.png")] bg-repeat-x absolute top-10  w-full object-cover z-20 h-10' />
        <ReservationForm />
        <div className='bg-[url("/img/overlay-bottom.png")] bg-repeat-x absolute bottom-3  w-full object-cover z-10 h-10' />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/menuItems");
  const navbarItems = await res.json()

  return {
    props: {
      data: {
        navbarItems
      }
    },
    revalidate: 12 * 60 * 60
  }
}

export default WithNavigation(Reservation);