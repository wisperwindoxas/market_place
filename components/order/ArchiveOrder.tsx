import { FC } from 'react'
import {orderListRows, columnsError} from './oreder.data'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,  Tooltip,Button } from "@nextui-org/react";




const ArchiveOrder: FC = () => {
  return <div>
    <Table aria-label="Example table with dynamic content">
        <TableHeader className='hover:bg-slate-300 flex gap-3'>
          {columnsError.map((column) =>
            <TableColumn  key={column.id}>{column.label}</TableColumn>
          )}
        </TableHeader>
      <TableBody>
        {orderListRows.map((row) =>

          <TableRow key={row.number_order} className='hover:bg-slate-300 flex gap-3 justify-center cursor-pointer transition-background'>
            <TableCell className='p-2 w-[150px] flex items-center text-[#BD7E20]'>№  {row.number_order}</TableCell>
            <TableCell className='p-2 w-[150px]'>{row.data_order}</TableCell>
            <TableCell className={`p-2 w-[150px] text-center
              ${row.status === "Выполнен"? "bg-[#0FC4CF] text-white":""}
              ${row.status === "Отгружается"? "bg-[#410F9E] text-white":""}
              ${row.status === "Оплачен"? "bg-[#FB6019] text-white":""}
              ${row.status === "Принят"? "bg-[#38A865] text-white":""}
              ${row.status === "Отгружен"? "bg-[#268AE1] text-white":""}
              
              `}
            
            >
              {row.status}
              </TableCell>
              <TableCell className='p-2 w-[150px]  line-clamp-2'>
                <Tooltip  placement={"bottom"}  content={row.order_name}>
                  
                  <Button className='cuttedText'>
                    {row.order_name}
                  </Button>
                </Tooltip>
            </TableCell>
            <TableCell className='p-2 w-[150px] '>{row.payment_type}</TableCell>
            <TableCell className='p-2 w-[150px] '>{row.delivery_type_cost}</TableCell>
            <TableCell className='p-2 w-[150px] '>{row.total_amount} So'm</TableCell>
            
          </TableRow>


        )}
      </TableBody>
    </Table>
  </div>
}

export default ArchiveOrder