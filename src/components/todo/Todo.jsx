import { useState } from 'react';

const Todo = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [allTodos, setAllTodos] = useState([
    { id: 1, title: "Add Images To The Product Gallery" },
    { id: 2, title: "Update User Profile Page" },
    { id: 3, title: "Support Tickets List Doesn't Support Commas" },
    { id: 4, title: "Changing Title Text On Single Locations Pages" },
    { id: 5, title: "Registration Confirmation! Email Is Missing Some Information" },
    { id: 6, title: "Login Page Not Redirecting Wrong" },
    { id: 7, title: "Custom Field For Registration" }
  ]);

  const deleteTodo = (id) => {
    const updatedTodos = allTodos.filter(todo => todo.id !== id);
    setAllTodos(updatedTodos);
  };
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  return (
    <div className="col-span-12 3xl:col-span-4 2xl:col-span-6">
      <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
        <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
          <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
            Todo
          </h2>
          <ul className="py-[16px] max-ssm:py-[10px] flex items-center max-xs:flex-wrap max-xs:justify-center" role="tablist" data-te-nav-ref>
            <li role="presentation">
              <a
                onClick={() => handleTabChange('all')}
                role="tab"
                aria-controls="today"
                aria-selected={activeTab === 'all'}
                className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                  activeTab === 'all'
                    ? 'data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary data-[te-nav-active]:bg-primary/10 dark:data-[te-nav-active]:text-title-dark dark:data-[te-nav-active]:bg-box-dark-up'
                    : ''
                }`}
              >
                All
              </a>
            </li>
            <li role="presentation">
              <a
                onClick={() => handleTabChange('deleted')}
                role="tab"
                aria-controls="week"
                aria-selected={activeTab === 'deleted'}
                className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                  activeTab === 'deleted'
                    ? 'data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary data-[te-nav-active]:bg-primary/10 dark:data-[te-nav-active]:text-title-dark dark:data-[te-nav-active]:bg-box-dark-up'
                    : ''
                }`}
              >
                Deleted
              </a>
            </li>
            <li role="presentation">
              <a
                onClick={() => handleTabChange('completed')}
                role="tab"
                aria-controls="month"
                aria-selected={activeTab === 'completed'}
                className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                  activeTab === 'completed'
                    ? 'data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary data-[te-nav-active]:bg-primary/10 dark:data-[te-nav-active]:text-title-dark dark:data-[te-nav-active]:bg-box-dark-up'
                    : ''
                }`}
              >
                Completed
              </a>
            </li>
          </ul>
        </div>
        <div className="p-[25px] pt-0">
          <div className="max-h-[252px] scrollbar overflow-y-auto">
            <div id="todayTodo" role="tabpanel" className={`opacity-100 transition-opacity duration-150 ease-linear ${activeTab === 'all' ? 'block' : 'hidden'}`}>
              <table className="min-w-full text-sm font-light text-start whitespace-nowrap">
                <tbody>
                  {allTodos.map(todo => (
                    <tr key={todo.id}>
                      <td>
                        <div className="flex">
                          <div className="flex items-center h-5">
                            <input id={`todolist-todo-${todo.id}`} type="checkbox" defaultValue className="relative ltr:float-left rtl:float-right me-[15px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-1 border-solid border-normal outline-none before:pointer-events-none before:absolute before:h-[10px] before:w-[0.5px] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-success checked:bg-success checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-0 checked:after:ms-[5px] checked:after:block checked:after:h-[10px] checked:after:w-[5px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] dark:border-white/10 dark:checked:border-success dark:checked:bg-success after:top-[2px]" required />
                          </div>
                          <label htmlFor={`todolist-todo-${todo.id}`} className="todo-title text-[14px] font-normal leading-[25px] text-theme-gray dark:text-subtitle-dark capitalize">{todo.title}</label>
                        </div>
                      </td>
                      <td className="ps-4 pe-4 py-2.5 font-medium last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent rounded-e-[4px]">
                        <div className="text-light dark:text-subtitle-dark text-[19px] flex items-center justify-end p-0 m-0 gap-[20px]">
                        <button type="button" className="cursor-pointer remove-todo-wrapper uil-trash-alt hover:text-danger" onClick={() => deleteTodo(todo.id)} />                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div id="weekTodo" role="tabpanel" className={`opacity-100 transition-opacity duration-150 ease-linear ${activeTab === 'deleted' ? 'block' : 'hidden'}`}>
              {deletedTodos.length === 0 ? (
                <p className="capitalize text-center text-light dark:text-subtitle-dark text-[18px] font-medium min-h-[210px] flex items-center justify-center gap-[6px]">
                  No todos Found In 'Deleted todos'. <i className="uil uil-meh text-warning" />
                </p>
              ) : (
                deletedTodos.map(todo => (
                  <p key={todo.id}>{todo.title}</p>
                ))
              )}
            </div>
            <div id="monthTodo" role="tabpanel" className={`opacity-100 transition-opacity duration-150 ease-linear ${activeTab === 'completed' ? 'block' : 'hidden'}`}>
              {completedTodos.length === 0 ? (
                <p className="capitalize text-center text-light dark:text-subtitle-dark text-[18px] font-medium min-h-[210px] flex items-center justify-center gap-[6px]">
                  No todos Found In 'Completed todos'. <i className="uil uil-meh text-warning" />
                </p>
              ) : (
                completedTodos.map(todo => (
                  <p key={todo.id}>{todo.title}</p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
