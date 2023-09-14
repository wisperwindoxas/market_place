'use client'
import { FC } from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import ListOrder from './ListOrder';
import ArchiveOrder from './ArchiveOrder';
import { BsSearch } from 'react-icons/bs';


const MyOrder: FC = () => {
  return <div className='flex flex-col gap-4'>
    <h1 className='text-2xl font-bold mb-4'>Мои заказы</h1>
    <div className='w-full flex items-center bg-white px-2 border rounded-md'>
      <input type="text" placeholder='Поиск по ID заказа' className='p-3 w-full border-none outline-none' />
      <BsSearch className="text-gray-600 font-bold text-2xl cursor-pointer" />
    </div>
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" className='bg-tabs'>
        
          <Tab key={"list"} title={"Список заказов покупателей"}><ListOrder/></Tab>
          <Tab key={"archive"} title={"Архив заказов"}><ArchiveOrder/></Tab>
      
  
      </Tabs>
    </div>
  </div>
}

export default MyOrder