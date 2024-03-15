import  { useState } from 'react';

const TaskItem = ({ taskId, title, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(taskId, editedTitle);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(taskId);
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <tr>
      <td>
        <div className="flex">
          <div className="flex items-center h-5">
            <input
              id={`tasklist-${taskId}`}
              type="checkbox"
              value=""
              className="relative ltr:float-left rtl:float-right me-[15px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-1 border-solid border-normal outline-none before:pointer-events-none before:absolute before:h-[10px] before:w-[0.5px] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-success checked:bg-success checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-0 checked:after:ms-[5px] checked:after:block checked:after:h-[10px] checked:after:w-[5px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] dark:border-white/10 dark:checked:border-success dark:checked:bg-success after:top-[2px]"
              required=""
            />
          </div>
          <label
            htmlFor={`tasklist-${taskId}`}
            className="task-title text-[15px] font-normal leading-[25px] text-theme-gray dark:text-subtitle-dark capitalize"
          >
            {isEditing ? (
              <input
                type="text"
                value={editedTitle}
                onChange={handleChange}
                autoFocus
              />
            ) : (
              title
            )}
          </label>
        </div>
      </td>
      <td className="ps-4 pe-4 py-2.5 font-medium last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent rounded-e-[4px]">
        <div className="text-light dark:text-subtitle-dark text-[19px]  flex items-center justify-end p-0 m-0 gap-[20px]">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <>
              <button
                type="button"
                className="cursor-pointer edit-task-title uil uil-edit-alt hover:text-info"
                onClick={handleEdit}
              ></button>
              <button
                type="button"
                className="cursor-pointer remove-task-wrapper uil uil-times hover:text-danger"
                onClick={handleDelete}
              ></button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
