import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ img, title, icon, desc }) => {
  return (
    <div className='flex flex-row items-center max-w-[540px] gap-5 my-3'>
      <img src={img} className='w-[220px]' />
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row items-center gap-2'>
          <div className='w-[55px] h-[50px] bg-secondary flex justify-center items-center rounded-[100%]'>
            <FontAwesomeIcon icon={icons[icon]} className='font-lg' />
          </div>
          <h3 className="font-semibold w-full text-[25px] mb-3">{title}</h3>
        </div>
        <p className='font-primary leading-[1.5rem] text-grayText font-[1rem]'>{desc}</p>
      </div>
    </div>
  )
}

export default ServiceCard