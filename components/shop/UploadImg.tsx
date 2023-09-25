import React from "react";
import ImageUploading, { type ImageListType } from "react-images-uploading";
import { RxUpdate } from 'react-icons/rx'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrImage } from 'react-icons/gr'

export default function UploadImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const onChange: any = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImages(imageList as never[]);
  };

  console.log(images)



  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="p-4 border block mx-auto rounded-xl flex items-center gap-2"
            >
              <GrImage className="text-3xl text-blue-500 " />
              Загрузите фотографии
            </button>
           {
            imageList.length > 0 ? "" : <p className='text-[12px] text-center mt-5'>
            Загрузите изображения (900х500 пикселей, формат jpg).
            Количество изображений для загрузки - 5 шт.

        </p>
           }
            &nbsp;
            <div className="grid grid-cols-5 gap-4  w-full">
              {imageList.map((image, index) => (
                <div key={index} className="image-item w-[70px] relative">
                  <img src={image.dataURL} alt="" className="w-full rounded-md  h-[80px] mr-4 object-cover" />
                  <div className="image-item__btn-wrapper flex z-50 absolute right-0 top-0 justify-center p-2 gap-5">
                    <button onClick={() => onImageUpdate(index)}><RxUpdate className="text-green-500 text-1xl" /></button>
                    <button onClick={() => onImageRemove(index)}><BsFillTrashFill className="text-red-500 text-1xl" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
