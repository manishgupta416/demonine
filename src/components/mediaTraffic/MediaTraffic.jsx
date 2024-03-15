import React, { useState } from "react";
import {tableData1} from '../../mock/TableData'
const MediaTraffic = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="col-span-12 2xl:col-span-6">
    <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
      <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
        <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
          Media traffic
        </h2>
        <div className="sm:py-[16px] flex items-center gap-[15px] max-xs:flex-wrap max-xs:justify-center " data-te-dropdown-ref>
                        <button className="text-[18px] text-light dark:text-subtitle-dark" type="button" id="salesReport" data-te-dropdown-toggle-ref aria-expanded="false" onClick={toggleDropdown}>
                            <i className="uil uil-ellipsis-h"></i>
                        </button>
                       { isOpen && ( <ul className="absolute z-[1000] top-9 ltr:float-left rtl:float-right m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:shadow-boxLargeDark dark:bg-box-dark-down  [&[data-te-dropdown-show]]:block" aria-labelledby="salesReport" data-te-dropdown-menu-ref>
                            <li>
                                <a className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up gap-[6px]" href="#" data-te-dropdown-item-ref>
                                    <i className="uil uil-print"></i> printer </a>
                            </li>
                            <li>
                                <a className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up" href="#" data-te-dropdown-item-ref>
                                    <i className="uil uil-book-alt"></i> pdf </a>
                            </li>
                            <li>
                                <a className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up" href="#" data-te-dropdown-item-ref>
                                    <i className="uil uil-file-info-alt"></i> google sheet </a>
                            </li>
                            <li>
                                <a className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up" href="#" data-te-dropdown-item-ref>
                                    <i className="uil uil-multiply"></i> Excel (XLSX) </a>
                            </li>
                            <li>
                                <a className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up" href="#" data-te-dropdown-item-ref>
                                    <i className="uil uil-file"></i> CSV </a>
                            </li>
                        </ul> )}
                    </div>
      </div>
        <div className="px-[25px] md:pb-[25px] ">
          <div className="max-h-[222px] scrollbar overflow-y-auto pt-[5px]">
            <table className="min-w-full text-sm font-light text-left whitespace-nowrap ">
              <tbody className="bg-white dark:bg-box-dark">
                {tableData1.map((data, index) => (
                  <tr key={index} className="group">
                    <td className="ps-0 pe-4 py-2.5 text-start last:text-end text-dark dark:text-title-dark group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
                      <div className="flex items-center gap-[12px]">
                        <span className="font-medium capitalize text-dark dark:text-title-dark text-15">
                          {data.platform}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
                      {data.followers}
                    </td>
                    <td className="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent rounded-e-[4px]">
                      <div className="flex items-center justify-end  gap-x-[10px] gap-y-[5px]  text-[14px] font-normal text-body dark:text-title-dark">
                        <div className="h-[4px] w-[185px] overflow-hidden bg-neutral-200 dark:bg-neutral-600 rounded-[20px]">
                          <div
                            className={`h-[4px] bg-${data.platform} rounded-e-[20px]`}
                            style={{ width: `${data.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaTraffic;
