'use client'
import { FC, useState } from 'react'
import {Tabs, Tab, Pagination} from "@nextui-org/react";
import ListOrder from './ListOrder';
import ArchiveOrder from './ArchiveOrder';
import { BsSearch } from 'react-icons/bs';
import CategoriesNameText from '../utils/CategoriesNameText';


const MyOrder: FC = () => {
  const [activePage, setActivePage] = useState<number>()

  return <div className='flex flex-col gap-4'>
    <CategoriesNameText value='Мои заказы'/>
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
      <div className=" w-full flex justify-center flex-wrap gap-4 items-center py-16">

          <Pagination onChange={(page: number) => setActivePage(page)} total={10} initialPage={1} size={"lg"} />

      </div>
  </div>
}

export default MyOrder