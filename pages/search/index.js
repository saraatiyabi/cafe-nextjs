import React from 'react'
import WithNavigation from '@/components/HOC/WithNavigation';
import Header from '@/components/modules/Header/Header';
import ProductCard from '@/components/modules/ProductCard/ProductCard';
import { useRouter } from 'next/router';

const Search = ({ data }) => {
  const { query } = useRouter();

  return (
    <>
      <Header pageName="Search Results" pageLink={`/search/?q=${query.q}`} />
      <div className='w-full flex justify-center items-center bg-light py-5'>
        <div className='max-w-[1200px] flex justify-center items-center flex-col'>
          <h1 className='text-secondary font-semibold text-3xl my-10 text-center'>Search Results for "{query.q}"</h1>
          <div className='w-full flex flex-col gap-3 py-5'>
            {
              data.searchResults?.map(item => (
                <ProductCard {...item} />
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}


export async function getServerSideProps(context) {
  const { query } = context;
  const searchTerm = query.q;

  const menuRes = await fetch("http://localhost:4000/menu");
  const navbarRes = await fetch("http://localhost:4000/menuItems");
  const menuData = await menuRes.json()
  const navbarItems = await navbarRes.json();
  const resultData = menuData.filter(menuItem => menuItem.type.toLowerCase().includes(searchTerm) || menuItem.title.toLowerCase().includes(searchTerm));

  return {
    props: {
      data: {
        searchResults: resultData,
        navbarItems
      }
    }
  }
}

export default WithNavigation(Search);