'use client'

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Switch, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react"
import { FC, useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import UploadImage from './UploadImg'
import { columns, rows } from './shop.data'
import { IPrice } from "./shop.type"
import CategoriesNameText from "../utils/CategoriesNameText"


const Shop: FC = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [change, setChange] = useState<boolean>(false)
  const [isEdit, setisEdit] = useState<IPrice>()



  return <div>
    <div className='w-full flex justify-between items-center py-2'>
      <CategoriesNameText value="Мои магазины"/>

      <Button  className='p-4 rounded-md flex justify-center items-center  gap-2' color={"primary"} onPress={onOpen} > <FiPlus/> Добавить магазин</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex w-full justify-normal flex-col gap-1">Добавить магазин</ModalHeader>
              <ModalBody>
                  <Input type="text" label="Название" placeholder="Авто Фаворит" />
                  <Input type="text" label="Адрес" placeholder="г. Санкт- Петербург, улица Матросова, 42" />
                  <Input type="text" label="Телефон" placeholder="+7 (495) 58-29-04" />
                  <Input type="email" label="E-mail" placeholder="client@auto-favorit.ru" />
                  <Input type="text" label="Описание для покупателя" placeholder="Описание для покупателя “Как нас найти”" />

                  <div className='w-full justify-center items-center p-5 border-dashed border-2 rounded-md'>
                  <UploadImage/>
                 
                  </div>
              </ModalBody>
              <ModalFooter>

                <Button className="btn-close w-full mt-4" color="primary" onPress={onClose}>
                     Добавить магазин
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


    </div>

    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) =>
          <TableColumn key={column.id}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rows.map((row, index) =>

          <TableRow key={index} className='hover:bg-slate-300 cursor-pointer transition-background'>
            <TableCell className='p-2 w-[150px]  text-[#5946D7] '>{row.nameShop}</TableCell>
            <TableCell className='p-2  flex items-center text-[#BD7E20]'> {row.city}</TableCell>
            <TableCell className='p-2  text-[12px]'>{row.addres}</TableCell>
            <TableCell className='p-2 '>{row.Phonenumber}</TableCell>
            <TableCell className='p-2   line-clamp-2'>{row.email}</TableCell>
            <TableCell className='p-2 '>{row.status}</TableCell>

            <TableCell className='p-2  flex'  >
                <Tooltip  placement={"bottom"}  content={` изминить магазин ${row.nameShop}`}>
                  
                  <Button onClick={() => setisEdit(row)} onPress={onOpen} className='flex bg-transparent justify-center items-center'>
                    <BsPencil className="text-center"/>
                  </Button>
                </Tooltip>
                <Switch isSelected={true}  defaultSelected color="success"></Switch>
                </TableCell>
            </TableRow>

         
        )}

    

      </TableBody>


    </Table>


      
      
    
    
  </div>
}

export default Shop