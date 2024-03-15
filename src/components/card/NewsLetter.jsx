import message from '../../assets/images/banner/3d-message.png'
const NewsLetter = () => {
  return (
    <div className="col-span-12">
    <div className="md:min-h-[260] md:max-h-full bg-white dark:bg-box-dark relative rounded-10">
        <div className="flex items-center justify-between">
            <div className="py-[25px] ps-[30px]">
                <h4 className="text-[20px] font-semibold text-dark dark:text-title-dark">Subscribe to our newsletter</h4>
                <p className="text-[16px] leading-[1.6875] font-normal mt-[5px] text-theme-gray dark:text-subtitle-dark">
                    We notify you once any post is published
                </p>
                <button className="h-[38px] text-[14px] font-medium rounded-6 inline-flex items-center justify-center duration-200 transition-all hover:bg-primary-hbr bg-primary px-[20px] border-primary text-white mt-[15px]" data-te-ripple-init="" data-te-ripple-color="light">
                    <span className="ng-star-inserted">Subscribe</span>
                </button>
            </div>
            <div className="flex items-center justify-center h-full">
                <img src={message} alt="img" />
            </div>
        </div>
    </div>
</div>  )
}

export default NewsLetter