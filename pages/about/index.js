import Header from '@/components/modules/Header/Header';
import AboutUs from '@/components/modules/AboutUs';
import React from 'react'
import WithNavigation from '@/components/HOC/WithNavigation';

const About = ({ data }) => {
  return (
    <div className='w-full relative'>
      <Header pageName="About Us" pageLink="/about" />
      <AboutUs />
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

export default WithNavigation(About)