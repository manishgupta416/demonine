import React, { useState } from "react";

const TeamMembers = () => {
    const teamMembersData = [
        {
          id: 1,
          name: "Duran Clayton",
          image: "images/sellers/10.png",
          status: "online",
        },
        {
          id: 2,
          name: "John Doe",
          image: "images/sellers/11.png",
          status: "offline",
        },
        {
          id: 3,
          name: "Jane Smith",
          image: "images/sellers/12.png",
          status: "online",
        },
        {
          id: 4,
          name: "Emily Johnson",
          image: "images/sellers/13.png",
          status: "offline",
        },
        {
          id: 5,
          name: "Michael Brown",
          image: "images/sellers/14.png",
          status: "online",
        },
        {
          id: 6,
          name: "Sophia Wilson",
          image: "images/sellers/15.png",
          status: "offline",
        },
        {
          id: 7,
          name: "William Lee",
          image: "images/sellers/16.png",
          status: "online",
        },
      ];
      

  const [addedMembers, setAddedMembers] = useState([]);

  const handleButtonClick = (memberId) => {
    setAddedMembers((prevMembers) => {
      if (prevMembers.includes(memberId)) {
        return prevMembers.filter((id) => id !== memberId);
      } else {
        return [...prevMembers, memberId];
      }
    });
  };

  return (
    <>
      <div className="col-span-12 3xl:col-span-4 2xl:col-span-6 my-7">
        <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
          <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto">
            <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
              team Members
            </h2>
          </div>
          <div className="px-[25px] pb-[25px]">
            <ul className="p-0 m-0">
              {teamMembersData.map((member) => (
                <li
                  key={member.id}
                  className="p-0 last:mb-0 mb-[20px] border-none flex items-center justify-between"
                >
                  <div className="flex items-center gap-[15px]">
                    <div className="border-none p-0 items-center">
                      <img
                        alt="hexadash Team"
                        className="max-w-[34px] rounded-[5px]"
                        src={member.image}
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-theme-gray text-[15px] dark:text-subtitle-dark hover:text-primary font-medium leading-[19px]"
                      >
                        {member.name}
                      </a>
                      <div className="before:-translate-y-1/2 before:absolute before:bg-success before:content-[''] before:h-[6px] before:rounded-full before:top-[50%] before:transform before:w-[6px] dark:text-subtitle-dark leading-1 before:start-0 ps-[12px] mt-[-4px] relative text-[12px] text-theme-gray">
                        {member.status}
                      </div>
                      <span className="before:bg-success hidden"></span>
                    </div>
                  </div>
                  <button
  type="button"
  className={`toggle-active text-primary border-primary/[.07] text-[13px] font-semibold px-[12px] hover:text-white ${
    addedMembers.includes(member.id)
      ? 'bg-purple-600 text-white' // Background color and text color when member is added
      : 'bg-primary/[.07]' // Default background color
  } transition-all duration-300 border-none rounded-3 [&.active]:bg-primary [&.active]:text-white h-[32px] rounded-4 group`}
  onClick={() => handleButtonClick(member.id)}
>
  {/* Conditional rendering based on whether the member is added */}
  {addedMembers.includes(member.id) ? (
    <span className="group-[.active]:block"> Added </span>
  ) : (
    <span className="group-[.active]:hidden"> Add </span>
  )}
</button>


                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
