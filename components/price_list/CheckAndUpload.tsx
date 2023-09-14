import { FC } from 'react'
import {FiUploadCloud} from 'react-icons/fi'

const CheckAndUpload: FC = () => {



  return <div className='flex gap-5 flex-col'>
    <h1 className='text-2xl font-bold'>Загрузка прайс-листа</h1>
    <p>Загрузите прайс-лист поставщика в формате csv и xls</p>
    <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" name="uploaderXlc" className='hidden' id="upload" />
    <div className='w-[350px] h-[150px] border-dashed border-2 border-gray-600 p-10 flex justify-center items-center'>
        <label className='flex items-center p-3 px-5 rounded-md bg-slate-400 cursor-pointer ' htmlFor="upload"><FiUploadCloud className="mr-4"/> Загрузить прайс-лист</label>
    </div>

    <button className='w-[350px] p-4 rounded-md text-white bg-[#5946D7]'>Загрузить прайс-лист</button>

  </div>
}

export default CheckAndUpload