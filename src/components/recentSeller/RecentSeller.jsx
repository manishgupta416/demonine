import React,{useState} from 'react'
import {taskData} from '../../mock/TableData'
const RecentSeller = () => {
    const [activeTab, setActiveTab] = useState('today');

    const [tasks, setTasks] = useState(taskData);
      
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
  return (
   <div className="col-span-12">
  <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
    <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
      <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark  capitalize">
        Recent seller
      </h2>
      <ul className="py-[16px] max-ssm:py-[10px] flex items-center max-xs:flex-wrap max-xs:justify-center" role="tablist" data-te-nav-ref>
        {/* Map over tasks object keys to render tabs */}
        {Object.keys(tasks).map((tabKey) => (
          <li key={tabKey} role="presentation">
            <a
              href={`#${tabKey}`}
              onClick={() => handleTabClick(tabKey)}
              className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 ${activeTab === tabKey ? 'text-white bg-primary dark:bg-box-dark-up' : 'text-light dark:text-subtitle-dark hover:text-primary'}`}
              role="tab"
              aria-controls={tabKey}
              aria-selected={activeTab === tabKey ? "true" : "false"}
            >
              {tabKey}
            </a>
          </li>
        ))}
      </ul>

    </div>
    <div className="p-[25px] pt-0">
      <div className="max-h-[320px] scrollbar overflow-y-auto">
        <div id="bs-today" role="tabpanel" data-te-tab-active className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block">
        <table className="min-w-full text-sm font-light text-left whitespace-nowrap">
                  <thead>
                    <tr>
                      <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-start text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden rounded-s-[4px]">
                        SELLER NAME
                      </th>
                      <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden">
                        COMPANY
                      </th>
                      <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden">
                        PRODUCT
                      </th>
                      <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden">
                        REVENUE
                      </th>
                      <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-end text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden rounded-e-[4px]">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-box-dark">
                    {tasks[activeTab].map((task) => (
                      <tr key={task.id} className="group">
                        <td className="ps-0 pe-4 py-2.5 text-start last:text-end text-dark dark:text-title-dark group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
                          <div className="flex items-center">
                            <div className="me-2.5 w-[34px] h-[34px]">
                              <img className="min-w-[34px] h-[34px] rounded-4" src={task.imgSrc} alt={task.sellerName} />
                            </div>
                            <span className="font-medium capitalize text-dark dark:text-title-dark text-15">
                              {task.sellerName}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
                          {task.company}
                        </td>
                        <td className="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
                          {task.product}
                        </td>
                        <td className="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
                          {task.revenue}
                        </td>
                        <td className="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent rounded-e-[4px]">
                          {task.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

        </div>
       
      </div>
    </div>
  </div>
</div>

  )
}

export default RecentSeller