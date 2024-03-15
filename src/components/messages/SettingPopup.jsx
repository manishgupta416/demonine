import React from 'react'
import { buttons, dropdownItems, emojis, menuItems } from "../../mock/Message";

export default function SettingPopup() {
  return (
    <div><ul
    className="absolute z-[1000] ltr:float-left rtl:float-right m-0 min-w-max list-none overflow-hidden border-none bg-white bg-clip-padding text-left text-base [&[data-te-dropdown-show]]:block dark:bg-box-dark-up shadow-[0_5px_30px_#9299b820] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-md gap-[8px]"
    aria-labelledby="settings7"
    data-te-dropdown-menu-ref
  >
    {dropdownItems.map((item, index) => (
      <li key={index}>
        <a
          className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up"
          href="#"
          data-te-dropdown-item-ref
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul></div>
  )
}
