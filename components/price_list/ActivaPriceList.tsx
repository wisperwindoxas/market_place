import { FC } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,Tooltip,Button } from "@nextui-org/react";
import { rows, columns } from './price.data'
import { AiOutlineClose } from 'react-icons/ai'


const ActivaPriceList: FC = () => {
  return <div>
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
          </TableRow>


        )}
      </TableBody>
    </Table>
  </div>
}

export default ActivaPriceList