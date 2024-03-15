import congrats from '../../assets/images/banner/congrats.png'
const CongratulationsCard = () => {
  return (
    <div className="col-span-12 3xl:col-span-4 2xl:col-span-6 ">
      <div className="md:max-h-full 2xl:min-h-[377px] bg-gradient-to-tr from-[#5840ff] to-[#00e4ec] relative rounded-10 z-[1]">
        <div className="absolute bottom-0 end-0 z-[-1]">
          <img
            src={congrats}
            alt="img"
            className="max-w-full lg:opacity-[1] opacity-50"
          />
        </div>
        <div className="flex justify-center">
          <div className="px-[30px] py-[55px] flex-[1_1_auto]">
            <h1 className="text-white dark:text-title-dark text-[30px] font-semibold leading-[1.2666666667]">
              Congratulations Danial!
            </h1>
            <p className="mt-[14px] mb-[22px] text-[16px] text-white/[.9] leading-[1.6875]">
              Best Seller on the last month.
            </p>

            <button
              className=" bg-white h-[44px] text-[15px] font-medium text-primary capitalize inline-flex items-center justify-center rounded-4 border-white px-[20px]"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsCard;
