import { ISideBar } from "./sidebar.interface";

export const sidebar: ISideBar[] = [
  {
    id: 1,
    title: "Мой каталог",
    icons: "/icons/catalog.svg",
    link:"/"
  },
  {
    id: 2,
    title: "Мои прайс-листы",
    icons: "/icons/price-list.svg",
    link:"price_list"
  },
  {
    id: 3,
    title: "Мои заказы",
    icons: "/icons/order.svg",
    link:"order"
  },
  {
    id: 4,
    title: "Мои магазины",
    icons: "/icons/Location.svg",
    link:"my_stores"
  },
  {
    id: 5,
    title: "Мои реквизиты",
    icons: "/icons/Credit-card.svg",
    link:"my_requisites"
  },
  {
    id: 6,
    title: "Мои поступления",
    icons: "/icons/my-post.svg",
    link:"my_receipts"
  },
  {
    id: 7,
    title: "Мои чаты",
    icons: "/icons/chat.svg",
    link:"my_chat"
  },
  {
    id: 8,
    title: "Бухгалтерия",
    icons: "/icons/bugal.svg",
    link:"accounting"
  },
  {
    id: 9,
    title: "Выйти",
    icons: "/icons/exit.svg",
    link:""
  }
]