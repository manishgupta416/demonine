import NewsLetter from "./NewsLetter";
import {cardsData} from "../../mock/CardData";
const Card = () => {
  return (
    <>
      <div className="col-span-12 3xl:col-span-4 2xl:col-span-12 m-4">
        <div className="grid grid-cols-12 gap-4">
          {cardsData.map((card, index) => (
            <div className="col-span-12 xs:col-span-6" key={index}>
              <div className="py-[22px] text-center rounded-10 bg-white dark:bg-box-dark">
                <div className="inline-flex flex-col items-center justify-center">
                  <div
                    className={`w-[60px] h-[60px] rounded-10 flex items-center justify-center text-[30px] ${
                      card.countNumber == "21"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-blue-100 text-blue-400"
                    }`}
                  >
                    <i className={card.icon}></i>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <div>
                      <p className="mt-[11px] font-[15px] text-theme-gray dark:text-subtitle-dark mb-[4px]">
                        Total {card.title}
                      </p>
                      <h1 className="text-dark dark:text-title-dark text-[30px] font-semibold countCategories">
                        <span className="countNumber">{card.countNumber}</span>
                        <span>K</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Card;
