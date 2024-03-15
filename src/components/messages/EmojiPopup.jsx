import React from "react";
import { buttons, dropdownItems, emojis, menuItems } from "../../mock/Message";

export default function EmojiPopup() {
  return (
    <div>
      <ul
        className="absolute z-[1000] ltr:float-left rtl:float-right m-0 min-w-max list-none overflow-hidden border-none bg-white bg-clip-padding text-left text-base [&[data-te-dropdown-show]]:flex item-center dark:bg-box-dark-up py-2 shadow-[0_5px_30px_#9299b820] dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-md px-[20px] gap-[8px]"
        aria-labelledby="emoji7"
        data-te-dropdown-menu-ref
      >
        {emojis.map((emoji, index) => (
          <li key={index} className="flex items-center">
            <button type="button" className="group">
              <img
                className="group-hover:scale-[1.3] min-w-25px] max-w-[25px] transition-all duration-300 ease-linear"
                src={`images/emoji/${emoji}`}
                alt="emotions"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
