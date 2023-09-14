import { FC } from 'react'

const Api: FC = () => {
  return <div className='flex flex-col gap-4 p-5'>
      <p>Раздел, описывающий архитектуру обмена данными по прайс-листам в формате WEBSOCKET для того, чтобы исключить возможность постоянной загрузки прайс-листов в формате csv/xls. В случае использования API Сайта изменения по продукции присылаются внутренними системами поставщиков “на лету”. Т.е. изменяется не целый список данных по продукции, а от одной до множества количества тысяч позиций по продукции.

      </p>

      <p>При подключении к WEBSOCKET система отправляет 2 ключа - KEY и TOKEN для синхронизации. Далее поставщик производит интеграцию API в тестовой зоне. После этого ответственный менеджер проверяет интеграцию и если она совершена успешно - разрешает обмен данными по продукции в обход загрузки прайс листов.</p>
  </div>
}

export default Api