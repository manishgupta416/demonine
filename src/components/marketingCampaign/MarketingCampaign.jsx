import { useState } from "react";
import {tabsContent1} from '../../mock/TableData'

const MarketingCampaign = () => {
  const [activeTab, setActiveTab] = useState("today");



  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="col-span-12 3xl:col-span-4 2xl:col-span-6 ">
      <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
        <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
          <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark  capitalize">
            Marketing Campaign
          </h2>
          <ul
            className="py-[16px] max-ssm:py-[10px] flex items-center max-xs:flex-wrap max-xs:justify-center"
            role="tablist"
            data-te-nav-ref
          >
            {tabsContent1.map((tab) => (
              <li key={tab.id} role="presentation">
                <a
                  onClick={() => handleTabClick(tab.id)}
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                    activeTab === tab.id
                      ? "border-primary text-primary bg-primary/10 dark:text-title-dark dark:bg-box-dark-up"
                      : ""
                  }`}

                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-[25px] pt-0">
          <div className="max-h-[359px] scrollbar overflow-y-auto">
          {tabsContent1.map((tab) => (
  <div
    key={tab.id}
    id={`mc-${tab.id}`}
    role="tabpanel"
    className={`transition-opacity duration-150 ease-linear ${
      activeTab === tab.id ? "opacity-100 block" : "opacity-0 hidden"
    }`}
    data-te-tab-active={activeTab === tab.id ? "block" : ""}
  >
    <table className="min-w-full text-sm font-light text-left whitespace-nowrap">
      <tbody className="bg-white dark:bg-box-dark">
        {tab.data.map((item, index) => (
          <tr key={index} className="group">
            <td className="ps-0 pe-4 py-[2px] text-start last:text-end text-dark dark:text-title-dark group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
              <div className="flex items-center">
                <div className="me-2.5 min-w-[25px] h-[25px] ">
                  <img
                    className="min-w-[25px] h-[25px]"
                    src={`${item.logo}`}
                    alt={item.company}
                  />
                </div>
                <span className="font-medium capitalize text-dark dark:text-title-dark text-15">
                  {item.company}
                </span>
              </div>
            </td>
            <td className="px-4 py-[5px] font-medium capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
              {item.amount}
            </td>
            <td className="px-4 py-[5px] font-medium capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
              {item.progress}
            </td>
            <td className="ps-4 pe-4 py-[5px] font-medium last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent rounded-e-[4px]">
              <img
                className="svg w-[35px] h-[35px] text-primary inline-block"
                src={`${item.progressImage}`}
                alt="circle progress"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCampaign;
