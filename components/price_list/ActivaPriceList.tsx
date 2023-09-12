import { FC } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, CardHeader } from "@nextui-org/react";
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
            <TableCell className='p-4 text-[#5946D7]'>{row.idProduct}</TableCell>
            <TableCell className='p-4 flex items-center text-[#BD7E20]'> {row.upload_date}</TableCell>
            <TableCell className='p-4'>{row.date_published}</TableCell>
            <TableCell className='p-4'>{row.status}</TableCell>
            <TableCell className='p-4 flex items-center gap-1'>{row.comment}</TableCell>
            <TableCell className='p-4'><button className='border p-3 rounded-md flex items-center'><AiOutlineClose /> Отменить</button></TableCell>
          </TableRow>


        )}
      </TableBody>
    </Table>
  </div>
}

export default ActivaPriceList