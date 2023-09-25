import React, { Dispatch, SetStateAction } from 'react'


type ContainerProps = {
  value: string;
};

const CategoriesNameText:React.FunctionComponent<ContainerProps> = (props) => {
  return <h1 className='text-2xl font-bold mb-4'>{props.value}</h1>
}

export default CategoriesNameText