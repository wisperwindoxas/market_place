import { FC } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, CardHeader } from "@nextui-org/react";
import { rowsError, columnsError } from './price.data'
import { BsDownload } from 'react-icons/bs'



const MessageAndErrors: FC = () => {
  return <div>
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columnsError.map((column) =>
          <TableColumn key={column.id}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rowsError.map((row) =>

          <TableRow key={row.upload_date} className='hover:bg-slate-300 cursor-pointer transition-background'>
            <TableCell className='p-2 flex items-center text-[#BD7E20]'> {row.upload_date}</TableCell>
            <TableCell className='p-2'>{row.nameFile}</TableCell>
            <TableCell className={`p-2 w-20 text-white text-center rounded-md ${row.status === "OK" ? "bg-green-600" : "bg-red-600"}`}>{row.status}</TableCell>
            <TableCell className='p-2 flex items-center gap-1'>{row.description}</TableCell>
            <TableCell className='p-2'><button className='border p-3 rounded-md flex items-center gap-3'><BsDownload /> Скачать</button></TableCell>
          </TableRow>


        )}
      </TableBody>
    </Table>
  </div>
}

export default MessageAndErrors