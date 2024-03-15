import React from "react";
import profileImg from '../../assets/images/campaign/profile-card.jpg'
import authorImg from '../../assets/images/campaign/profile-author.jpg'

const Profile = () => {
  return (
    <div className="col-span-12 3xl:col-span-4 my-7">
      <figure className="w-full md:min-h-[360px] bg-white dark:bg-box-dark text-center rounded-10 shadow-[0px_5px_20px_rgba(160, 160, 160, 0.02)] mb-0">
        <figcaption>
          <img
            alt="banner"
            className="static w-full rounded-t-10"
            src={profileImg}
          />
          <div className="pb-[30px] mt-[-75px]">
            <div className="mb-[10px]">
              <img
                alt="profile"
                className="p-[5px] rounded-full max-w-[110px] bg-white dark:bg-box-dark inline-block"
                src={authorImg}
              />
            </div>
            <h4 className="text-[18px] font-semibold mb-[2px] text-dark dark:text-title-dark">
              Robert Clinton
            </h4>
            <p className="mb-[18px] text-light dark:text-subtitle-dark">
              Best Seller of the last month
            </p>
            <ul className="flex items-center justify-center gap-[5px]">
              <li>
                <a
                  className="bg-facebook border-facebook text-white duration-200 flex h-[32px] hover:opacity-[0.8] items-center justify-center leading-[1] rounded-6 w-[32px]"
                  href="#"
                >
                  <i className="uil uil-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  className="bg-twitter border-twitter text-white duration-200 flex h-[32px] hover:opacity-[0.8] items-center justify-center leading-[1] rounded-6 w-[32px]"
                  href="#"
                >
                  <img
                    className="svg w-[15px] h-[15px]"
                    src="images/svg/x-twitter.svg"
                    alt="twitter"
                  />
                </a>
              </li>
              <li>
                <a
                  className="bg-dribbble border-dribbble text-white  duration-200 flex h-[32px] hover:opacity-[0.8] items-center justify-center leading-[1] rounded-6 w-[32px]"
                  href="#"
                >
                  <i className="uil uil-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Profile;
