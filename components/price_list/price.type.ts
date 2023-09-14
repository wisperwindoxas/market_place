export interface IPriceTabs{
  id: number
  label:string
}

export interface IPrice{
  idProduct:string,
    upload_date:string,
    date_published:string,
    status:string,
    comment:string
    button:""
}

export interface IPriceColumns{
  id: number
  label:string
}


export interface IPriceError{
    upload_date:string,
    nameFile:string,
    status:string,
    description:string
    button:""
}