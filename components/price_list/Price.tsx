'use client'

import { FC } from 'react'
import { Tabs, Tab, Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, CardHeader } from "@nextui-org/react";
import { tabs, rows, columns } from './price.data'


const Price: FC = () => {
  return <div>
    <h1 className='text-2xl font-bold mb-4'>Мои прайс-листы</h1>
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
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
                        <TableCell className='p-4'><button className='border p-3 rounded-md'>Отменить</button></TableCell>
                      </TableRow>


                    )}
                  </TableBody>
                </Table>
              </CardBody>
              
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  </div>
}

export default Price