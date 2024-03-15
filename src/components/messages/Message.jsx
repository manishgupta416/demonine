import React, { useState } from "react";
import adminImg from "../../assets/images/campaign/admin-preview.jpg";
import t1 from "../../assets/images/campaign/t1.png";
import { buttons, dropdownItems, emojis, menuItems } from "../../mock/Message";
import SettingPopup from "./SettingPopup";
import EmojiPopup from "./EmojiPopup";
import MenuPopup from "./MenuPopup";
const Message = () => {
  const [menuDropdown, setMenuDropdown] = useState(false);
  const handleMenu = () => {
    setMenuDropdown(!menuDropdown);
  };

  const [dropdowns, setDropdowns] = useState(
    Array.from({ length: 13 }, () => false)
  );

  const toggleHandler = (index) => {
    setDropdowns((prevState) => {
      const updatedDropdowns = [...prevState];
      updatedDropdowns[index] = !updatedDropdowns[index];
      return updatedDropdowns;
    });
  };

  return (
    <div className="col-span-12 3xl:col-span-4 2xl:col-span-12 max-3xl:order-2">
      <div className="bg-white dark:bg-box-dark rounded-10">
        <div className="ssm:px-[25px] px-[15px] py-[15.50px] border-b-1 border-regular dark:border-box-dark-up ">
          <div className="flex items-center justify-between gap-[15px]">
            <div>
              <h6 className="mb-1 text-lg font-medium text-dark dark:text-title-dark">
                Erin Gonzales
              </h6>
              <div className="inline-flex items-center gap-[6px]">
                <span className="bg-success min-w-[6px] h-[6px] rounded-full inline-flex align-center gap-[5px] relative top-[-1px]" />
                <span className="text-light dark:text-subtitle-dark capitalize text-[12px]">
                  Active Now
                </span>
              </div>
            </div>
            <div className="relative" data-te-dropdown-ref>
              <button
                className="text-[18px] text-light dark:text-subtitle-dark"
                type="button"
                data-te-dropdown-toggle-ref
                aria-expanded={menuDropdown}
                onClick={handleMenu}
              >
                <i className="uil uil-ellipsis-v" />
              </button>
              {menuDropdown && <MenuPopup />}
            </div>
          </div>
        </div>
        <div className="h-[553px] pt-[25px] relative overflow-x-hidden overflow-y-auto scrollbar chat-wrapper">
          <div className="flex w-full mb-[30px] ssm:px-[25px] px-[15px] last:mb-0 justify-start">
            <div className="me-[15px]">
              <img
                className="min-w-[46px] h-[46px] rounded-full"
                src={t1}
                alt="User chat"
              />
            </div>
            <div>
              <h6 className="text-sm font-semibold text-dark dark:text-title-dark">
                {" "}
                Erin Gonzales{" "}
                <span className="text-light dark:text-subtitle-dark text-xs font-normal mx-[15px]">
                  March 30, 2020
                </span>
              </h6>
              <div className="flex flex-wrap items-center gap-4">
                <p className="bg-primary dark:bg-box-dark-up dark:text-title-dark max-w-[670px] mt-[10px] px-5 py-[18px] rounded-[15px] rounded-br-0 text-base text-white">
                  Jam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat consetetur sadipscing elitr sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                  sed diam voluptua.{" "}
                </p>
                <div className="flex items-center gap-[15px]">
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="emoji7"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(0)}
                    >
                      <i className="uil uil-smile" />
                    </button>
                    {dropdowns[0] && <EmojiPopup />}
                  </div>
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="settings6"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(1)}
                    >
                      <i className="uil uil-ellipsis-h" />
                    </button>
                    {dropdowns[1] && <SettingPopup />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-[30px] w-full text-center capitalize z-10 after:absolute after:top-1/2 after:-translate-y-1/2 ltr:after:left-0 rtl:after:right-0 after:bg-regular dark:after:bg-box-dark-up after:w-full after:h-[1px] after:-z-10">
            <span className="bg-white dark:bg-box-dark px-6 text-light dark:text-subtitle-dark text-[13px]">
              7:57 PM
            </span>
          </div>
          <div className="flex w-full mb-[30px] ssm:px-[25px] px-[15px] last:mb-0 justify-end">
            <div className="flex flex-wrap items-center justify-end gap-4">
              <span className="w-full text-xs font-normal text-light dark:text-subtitle-dark text-end">
                March 30, 2020
              </span>
              <div className="flex items-center gap-[15px]">
                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="text-[18px] text-light-extra dark:text-subtitle-dark"
                    type="button"
                    id="emoji7"
                    data-te-dropdown-toggle-ref
                    onClick={() => toggleHandler(2)}
                  >
                    <i className="uil uil-smile" />
                  </button>
                  {dropdowns[2] && <EmojiPopup />}
                </div>
                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="text-[18px] text-light-extra dark:text-subtitle-dark"
                    type="button"
                    id="settings6"
                    data-te-dropdown-toggle-ref
                    onClick={() => toggleHandler(3)}
                  >
                    <i className="uil uil-ellipsis-h" />
                  </button>
                  {dropdowns[3] && <SettingPopup />}
                </div>
              </div>
              <p className="bg-section dark:bg-dark dark:text-title-dark max-w-[670px] mt-0 order-last px-5 py-[18px] rounded-[15px] rounded-br-0 text-base">
                Oh! What is it?{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full mb-[30px] ssm:px-[25px] px-[15px] last:mb-0 justify-start">
            <div className="me-[15px]">
              <img
                className="min-w-[46px] h-[46px] rounded-full"
                src={t1}
                alt="User chat"
              />
            </div>
            <div>
              <h6 className="text-sm font-semibold text-dark dark:text-title-dark">
                Erin Gonzales
              </h6>
              <div className="flex flex-wrap items-center gap-4">
                <img
                  className="p-5 mt-[10px] bg-deepBG dark:bg-box-dark-up rounded-10"
                  src={adminImg}
                  alt="admin"
                />
                <div className="flex items-center gap-[15px]">
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="emoji4"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(4)}
                    >
                      <i className="uil uil-smile" />
                    </button>
                    {dropdowns[4] && <EmojiPopup />}
                  </div>
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="settings6"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(5)}
                    >
                      <i className="uil uil-ellipsis-h" />
                    </button>
                    {dropdowns[5] && <SettingPopup />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full mb-[30px] ssm:px-[25px] px-[15px] last:mb-0 justify-start">
            <div className="me-[15px]">
              <img
                className="min-w-[46px] h-[46px] rounded-full"
                src={t1}
                alt="User chat"
              />
            </div>
            <div>
              <h6 className="text-sm font-semibold text-dark dark:text-title-dark">
                Erin Gonzales{" "}
                <span className="text-light dark:text-subtitle-dark text-xs font-normal mx-[15px]">
                  March 30, 2020
                </span>
              </h6>
              <div className="flex flex-wrap items-center gap-4">
                <p className="bg-primary dark:bg-box-dark-up dark:text-title-dark max-w-[670px] mt-[10px] px-5 py-[18px] rounded-[15px] rounded-br-0 text-base text-white">
                  HexaDash - Best Admin Dashboard Template
                </p>
                <div className="flex items-center gap-[15px]">
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="emoji7"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(6)}
                    >
                      <i className="uil uil-smile" />
                    </button>
                    {dropdowns[6] && <EmojiPopup />}
                  </div>
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="settings6"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(7)}
                    >
                      <i className="uil uil-ellipsis-h" />
                    </button>
                    {dropdowns[7] && <SettingPopup />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full mb-[30px] ssm:px-[25px] px-[15px] last:mb-0 justify-start">
            <div className="me-[15px]">
              <img
                className="min-w-[46px] h-[46px] rounded-full"
                src={t1}
                alt="User chat"
              />
            </div>
            <div>
              <h6 className="text-sm font-semibold text-dark dark:text-title-dark">
                Erin Gonzales{" "}
                <span className="text-light dark:text-subtitle-dark text-xs font-normal mx-[15px]">
                  March 30, 2020
                </span>
              </h6>
              <div className="flex flex-wrap items-center gap-4">
                <p className="bg-primary dark:bg-box-dark-up dark:text-title-dark max-w-[670px] mt-[10px] px-5 py-[18px] rounded-[15px] rounded-br-0 text-base text-white">
                  A creative, responsive and highly customizable admin template
                </p>
                <div className="flex items-center gap-[15px]">
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="emoji7"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(8)}
                    >
                      <i className="uil uil-smile" />
                    </button>
                    {dropdowns[8] && <EmojiPopup />}
                  </div>
                  <div className="relative" data-te-dropdown-ref>
                    <button
                      className="text-[18px] text-light-extra dark:text-subtitle-dark"
                      type="button"
                      id="settings6"
                      data-te-dropdown-toggle-ref
                      onClick={() => toggleHandler(9)}
                    >
                      <i className="uil uil-ellipsis-h" />
                    </button>
                    {dropdowns[9] && <SettingPopup />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-last-message flex w-full mb-[30px] ssm:px-[25px] px-[15px] last:mb-0 justify-end">
            <div className="flex flex-wrap items-center justify-end gap-4">
              <span className="w-full text-xs font-normal text-light dark:text-subtitle-dark text-end">
                March 30, 2020
              </span>
              <div className="flex items-center gap-[15px]">
                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="text-[18px] text-light-extra dark:text-subtitle-dark"
                    type="button"
                    id="emoji7"
                    data-te-dropdown-toggle-ref
                    onClick={() => toggleHandler(10)}
                  >
                    <i className="uil uil-smile" />
                  </button>
                  {dropdowns[10] && <EmojiPopup />}
                </div>
                <div className="relative" data-te-dropdown-ref>
                  <button
                    className="text-[18px] text-light-extra dark:text-subtitle-dark "
                    type="button"
                    id="settings7"
                    data-te-dropdown-toggle-ref
                    onClick={() => toggleHandler(11)}
                  >
                    <i className="uil uil-ellipsis-h" />
                  </button>
                  {dropdowns[11] && <SettingPopup />}
                </div>
              </div>
              <p className="bg-section dark:bg-dark dark:text-title-dark max-w-[670px] mt-0 order-last px-5 py-[18px] rounded-[15px] rounded-br-0 text-base">
                Wow, that was cool! What was that?
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center gap-2 max-sm:gap-4 max-sm:justify-center max-sm:flex-wrap py-4 mx-4">
          <div className="flex-grow bg-section dark:bg-box-dark-up h-12 px-4 text-body dark:text-subtitle-dark border-none outline-none rounded-full flex items-center gap-4">
            <i className="uil uil-smile text-[20px] text-[#8C90A4] dark:text-subtitle-dark" />
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow bg-transparent h-full text-lg text-dark dark:text-title-dark outline-none shadow-none border-none dark:placeholder-shown:text-title-dark"
            />
          </div>
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`flex items-center justify-center bg-section dark:bg-box-dark-up w-12 h-12 rounded-full ${button.color} ${button.darkColor}`}
              data-te-ripple-init={button.rippleInit ? true : undefined}
              data-te-ripple-color={
                button.rippleColor ? button.rippleColor : undefined
              }
            >
              <i className={`uil ${button.icon} text-lg`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Message;
