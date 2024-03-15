import React from 'react'
import { buttons, dropdownItems, emojis, menuItems } from "../../mock/Message";

export default function MenuPopup() {
  return (
    <div>  <ul
    className="absolute z-[1000] ltr:float-left rtl:float-right m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:shadow-boxLargeDark dark:bg-box-dark-down  [&[data-te-dropdown-show]]:block"
    aria-labelledby="inboxEllipsis"
    data-te-dropdown-menu-ref
  >
    {menuItems.map((menuItem, index) => (
      <li key={index}>
        <a
          className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up gap-[6px]"
          href="#"
          data-te-dropdown-item-ref
        >
          <i className={menuItem.icon} /> {menuItem.text}
        </a>
      </li>
    ))}
  </ul></div>
  )
}
