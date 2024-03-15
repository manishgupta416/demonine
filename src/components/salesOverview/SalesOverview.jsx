import Chart from "react-apexcharts";
import { useState } from "react";
import {optionDonut,series} from '../../mock/ChartData'
const SalesOverview = () => {

      const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="col-span-12 3xl:col-span-4 2xl:col-span-6 w-1/2 h-1/6">
            <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
                <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
                    <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
                        Sales Overview
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
                <div className="px-[25px] md:pb-[25px] flex justify-center items-center ">
                    <Chart options={optionDonut} series={series} type="donut" className='w-1/2 flex justify-center items-center' height={400}/>
                </div>
            </div>
        </div>
    );
};

export default SalesOverview;