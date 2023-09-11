'use client'

import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

import { rows, columns } from './catalog.data'
import Image from 'next/image';




const Catalog: FC = () => {

  const [activePage, setActivePage] = useState<number>()

  


  return <div >
    <h1 className='text-2xl font-bold mb-4'>Мой каталог</h1>
    <div className='w-[350px] flex items-center bg-white px-2 border rounded-md'>
      <input type="text" placeholder='Поиск по запчастям' className='p-3 w-full border-none outline-none' />
      <BsSearch className="text-gray-600 font-bold text-2xl cursor-pointer" />
    </div>

    <div className='w-full  py-4 mt-4' >
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          {columns.map((column) =>
            <TableColumn key={column.id}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {rows.map((row) =>

            <TableRow key={row.id} className='hover:bg-slate-300 cursor-pointer transition-background'>


              <TableCell className='p-4 text-[#5946D7]'>{row.numberProduct}</TableCell>
              <TableCell className='p-4 flex items-center text-[#BD7E20]'> <Image width={16} height={16}  src={'/icons/rating.svg'} alt=''/> {row.rating}</TableCell>
              <TableCell className='p-4'>{row.name}</TableCell>
              <TableCell className='p-4'>{row.count} шт.</TableCell>
              <TableCell className='p-4 flex items-center gap-1'>{row.date} дн. <div className='w-[12px] h-[12px] p-2 rounded-full bg-[#38A865] relative'><Image fill className='absolute' src={"/icons/static.svg"} alt="" /></div></TableCell>
              <TableCell className='p-4'>{row.price} so'm</TableCell>


            </TableRow>


          )}
        </TableBody>
      </Table>
    </div>
    <div className=" w-full flex justify-center flex-wrap gap-4 items-center py-16">

      <Pagination onChange={(page: number) => setActivePage(page)} total={10} initialPage={1} size={"lg"} />

    </div>
  </div>
}

export default Catalog