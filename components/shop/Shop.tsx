'use client'

import { FC } from 'react'
import {FiPlus} from 'react-icons/fi'
import {Modal,Input, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import UploadImage from './UploadImg';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,Tooltip,Button } from "@nextui-org/react";
import { rows, columns } from './shop.data'
import { AiOutlineClose } from 'react-icons/ai';


const Shop: FC = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return <div>
    <div className='w-full flex justify-between items-center py-2'>
      <h1 className='text-2xl font-bold mb-4'> Мои магазины</h1>
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

                <Button className="btn-close w-full mt-4  " color="primary" onPress={onClose}>
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
        {rows.map((row) =>

          <TableRow key={row.date_published} className='hover:bg-slate-300 cursor-pointer transition-background'>
            <TableCell className='p-2 w-[150px] text-[#5946D7] '>{row.idProduct}</TableCell>
            <TableCell className='p-2 w-[150px] flex items-center text-[#BD7E20]'> {row.upload_date}</TableCell>
            <TableCell className='p-2 w-[150px]'>{row.date_published}</TableCell>
            <TableCell className='p-2 w-[150px]'>{row.status}</TableCell>
            <TableCell className='p-2 w-[150px]  line-clamp-2'>
            <Tooltip  placement={"bottom"}  content={row.comment}>
                  
                  <Button className='cuttedText'>
                    {row.comment}
                  </Button>
                </Tooltip>
              
              </TableCell>
            <TableCell className='p-2 w-[150px]'><button className='border p-3 rounded-md flex items-center'><AiOutlineClose /> Отменить</button></TableCell>
            <TableCell className='p-2 w-[150px]'><button className='border p-3 rounded-md flex items-center'><AiOutlineClose /> Отменить</button></TableCell>
          </TableRow>


        )}
      </TableBody>
    </Table>
  </div>
}

export default Shop