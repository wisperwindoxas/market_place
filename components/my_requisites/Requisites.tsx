"use client"

import CategoriesNameText from "../utils/CategoriesNameText"
import { FiPlus } from 'react-icons/fi'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { accountData } from "./req.data"

import {BsCreditCard2BackFill, BsTrash3} from 'react-icons/bs'
import {GrEdit} from 'react-icons/gr'



const Requisites: React.FC = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return <div>
    
    <div className='w-full flex justify-between items-center py-2'>
    <CategoriesNameText value={"Мои реквизиты"}/>
      
      <Button  className='p-4 rounded-md flex justify-center items-center  gap-2' color={"primary"} onPress={onOpen} > <FiPlus/> Добавить магазин</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex w-full justify-normal flex-col gap-1">Добавить магазин</ModalHeader>
              <ModalBody>
                  <Input type="text" label="Название" placeholder="" />
                  <Input type="text" label="Номер счета" placeholder="" />
                  <Input type="text" label="БИК" placeholder="" />
                  
              </ModalBody>
              <ModalFooter>

                <Button className="btn-close w-full mt-4  " color="primary" onPress={onClose}>
                    Добавить реквизиты
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


    </div>  

            <div className="grid grid-cols-2 gap-5">
                  {accountData.map((item) =>{
                    return <div className="h-[92px] flex justify-between border rounded-md p-5">
                        <div className="flex gap-5 item-center">
                          <BsCreditCard2BackFill className="text-[#5946D7] mt-1"/>
                          <div>
                            <h3>{item.title}</h3>
                            <p>{item.account_number}</p>
                          </div>
                        </div>
                        <div className="flex gap-5 text-[#7A7680]">
                          <GrEdit className="cursor-pointer"/>
                          <BsTrash3 className="cursor-pointer"/>
                        </div>
                    </div>
                  })}
            </div>
  </div>
}

export default Requisites