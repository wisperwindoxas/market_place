import { IPrice, IPriceColumns } from "./shop.type";

export const columns:IPriceColumns[] = [
  {
    id: 1,
    label: "Название",
  },
  {
    id: 2,
    label: "Город",
  },
  {
    id: 3,
    label: "Адрес",
  },
  {
    id: 4,
    label: "Телефон",
  },
  {
    id: 5,
    label: "Эл. почта",
  },
  {
    id: 6,
    label: "Статус",
  },
  {
    id: 7,
    label: "Действия",
  }
  
];


export const rows:IPrice[] = [
  {
    idProduct:"33208609838",
    upload_date:"23.05.2021",
    date_published:"02.05.2021",
    status:"Опубликован",
    comment:"Комментарий модератора в случае отмены",
    button:""
  }

]