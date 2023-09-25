'use client'

import { FC } from 'react'
import { Tabs, Tab} from "@nextui-org/react";
import ActivaPriceList from './ActivaPriceList';
import CheckAndUpload from './CheckAndUpload';
import MessageAndErrors from './MessageAndErrors';
import Api from './Api';
import CategoriesNameText from '../utils/CategoriesNameText';


const Price: FC = () => {
  return <div>
    <CategoriesNameText value='Мои прайс-листы'/>

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



