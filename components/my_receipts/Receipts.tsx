'use client'

import CategoriesNameText from "../utils/CategoriesNameText"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import {columnsReceipts, ReceiptsListRows} from './receipts.data'

import {HiMiniDocumentArrowDown} from 'react-icons/hi2'
import Link from "next/link";


const Receipts: React.FC = () => {
  return <div>
        <CategoriesNameText value="Мои поступления"/>

        <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columnsReceipts}>
        {(column) => <TableColumn key={column.id}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={ReceiptsListRows}>
              {ReceiptsListRows.map((row) =>

        <TableRow key={row.data_receipts} className='hover:bg-slate-300 flex gap-3 justify-center cursor-pointer transition-background'>
          <TableCell className='p-2 w-[150px] flex items-center'>№ {row.number_receipts}</TableCell>
          <TableCell className='p-2 w-[150px]'>{row.data_receipts}</TableCell>
          <TableCell className='p-2 w-[150px]'>{row.payment_type}</TableCell>
          <TableCell className={`p-2 w-[150px]
          ${row.status === "Активный"? "text-[#42f72a]":""}
          ${row.status === "Неактивный"? "text-[#fc2e2e]":""}
          `}>
          {row.status}</TableCell>
          <TableCell className='p-2 w-[150px]'>{row.payment_type} So'm</TableCell>
          <TableCell className='p-2 text-3xl text-[#5946D7] w-[150px]'><Link href={"/buga.pdf"}><HiMiniDocumentArrowDown/></Link></TableCell>
          
        </TableRow>


        )}
      </TableBody>
    </Table>
  </div>
}

export default Receipts