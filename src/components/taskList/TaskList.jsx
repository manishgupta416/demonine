import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
 const [tasks, setTasks] = useState({
  today: [
    { id: 1, title: "Planning For New Dashboard Wireframe And Prototype Design" },
    { id: 2, title: "Standup Meeting With Team" },
    { id: 3, title: "Review Code for Feature Implementation" },
    { id: 4, title: "Update Project Documentation" },
    { id: 5, title: "Prepare Presentation for Client Meeting" },
    { id: 6, title: "Coordinate with Marketing Team for Product Launch" },
  ],
  week: [
    { id: 7, title: "Design UI Mockups for Website Redesign" },
    { id: 8, title: "Write Content for Social Media Posts" },
    { id: 9, title: "Organize Weekly Team Brainstorming Session" },
    { id: 10, title: "Test New Software Updates for Bug Fixes" },
    { id: 11, title: "Attend Webinar on Latest Industry Trends" },
    { id: 12, title: "Review and Provide Feedback on Peer's Work" },
  ],
  month: [
    { id: 13, title: "Conduct User Testing for Mobile App Features" },
    { id: 14, title: "Prepare Quarterly Financial Report" },
    { id: 15, title: "Research Competitor Analysis for Market Insights" },
    { id: 16, title: "Collaborate with Design Team for Branding Workshop" },
    { id: 17, title: "Develop Prototype for New Product Feature" },
    { id: 18, title: "Analyze Customer Feedback for Product Improvement" },
  ],
});


  const handleEdit = (taskId, editedTitle) => {
    const updatedTasks = { ...tasks };
    Object.keys(updatedTasks).forEach((tab) => {
      updatedTasks[tab] = updatedTasks[tab].map((task) =>
        task.id === taskId ? { ...task, title: editedTitle } : task
      );
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = { ...tasks };
    Object.keys(updatedTasks).forEach((tab) => {
      updatedTasks[tab] = updatedTasks[tab].filter((task) => task.id !== taskId);
    });
    setTasks(updatedTasks);
  };

  const [activeTab, setActiveTab] = useState("today");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="col-span-12 3xl:col-span-8 2xl:col-span-6">
      <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative">
        <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
          <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
            Task list
          </h2>
          <ul
            className="py-[16px] max-ssm:py-[10px] flex items-center max-xs:flex-wrap max-xs:justify-center"
            role="tablist"
            data-te-nav-ref
          >
            <li role="presentation">
              <a
                onClick={() => handleTabClick("today")}
                role="tab"
                aria-controls="today"
                className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                  activeTab === "today"
                    ? "border-primary text-primary bg-primary/10 dark:text-title-dark dark:bg-box-dark-up"
                    : ""
                }`}
              >
                Today
              </a>
            </li>
            <li role="presentation">
              <a
                onClick={() => handleTabClick("week")}
                role="tab"
                aria-controls="week"
                className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                  activeTab === "week"
                    ? "border-primary text-primary bg-primary/10 dark:text-title-dark dark:bg-box-dark-up"
                    : ""
                }`}
              >
                Week
              </a>
            </li>
            <li role="presentation">
              <a
                onClick={() => handleTabClick("month")}
                role="tab"
                aria-controls="month"
                aria-selected={activeTab === "month"}
                className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                  activeTab === "month"
                    ? "border-primary text-primary bg-primary/10 dark:text-title-dark dark:bg-box-dark-up"
                    : ""
                }`}
              >
                Month
              </a>
            </li>
          </ul>
        </div>
        <div className="p-[25px] pt-0">
          <div className="max-h-[252px] scrollbar overflow-y-auto">
            <div
              id="todayTasklist"
              role="tabpanel"
              data-te-tab-active
              className="opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            >
              <table className="min-w-full text-sm font-light text-left whitespace-nowrap">
                <tbody>
                  {tasks[activeTab].map((task) => (
                    <TaskItem
                      key={task.id}
                      taskId={task.id}
                      title={task.title}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
