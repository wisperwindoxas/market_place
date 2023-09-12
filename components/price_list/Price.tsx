'use client'

import { FC } from 'react'
import { Tabs, Tab, Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, CardHeader } from "@nextui-org/react";
import { rows, columns } from './price.data'
import ActivaPriceList from './ActivaPriceList';
import CheckAndUpload from './CheckAndUpload';
import MessageAndErrors from './MessageAndErrors';
import Api from './Api';


const Price: FC = () => {
  return <div>
    <h1 className='text-2xl font-bold mb-4'>Мои прайс-листы</h1>
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" className='bg-tabs'>
        
          <Tab key={"active"} title={"Активные прайс-листы"}><ActivaPriceList/></Tab>
          <Tab key={"check"} title={"Проверка и загрузка"}><CheckAndUpload/></Tab>
          <Tab key={"error"} title={"Сообщения и ошибки"}><MessageAndErrors/></Tab>
          <Tab key={"api"} title={"API"}><Api/></Tab>
  
      </Tabs>
    </div>
  </div>
}

export default Price



