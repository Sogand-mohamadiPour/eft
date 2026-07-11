function Footer() {
  return (
    <div className="px-2">
      <div className="w-full h-fit flex flex-wrap bg-[rgb(42,29,76)] mt-10 rounded-t-3xl">
        <div className="w-full lg:w-1/2 py-5 px-5 lg:px-20 ">
          <img src="/assets/footerLogo.png" alt="footer_logo" className="lg:w-74" />
          <p className="mt-16 text-justify text-md">
            EFT یا Emotional Freedom Techniques مجموعه‌ای از تکنیک‌های کاربردی
            برای آزادسازی موانع احساسی و ذهنی است. ما با استفاده از این روش به
            کاربران کمک می‌کنیم باورهای محدودکننده را شناسایی و رها کرده و با
            ذهنی توانمندتر و آرام‌تر به سمت اهداف خود حرکت کنند.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-5 lg:p-20 text-sm text-justify">
          <p>آدرس : تهران ، خیابان فاطمی ، پلاک 79 ، طبقه دوم</p>
          <p className="py-10">تلفن:</p>
          <div className="flex ">
            <img
              className="cursor-pointer hover:opacity-60 transition pl-3 w-12 h-auto"
              src="/assets/ble.png" 
              alt="ble" 
            />
            <img 
              className="cursor-pointer hover:opacity-60 transition pl-3 w-12 h-auto"
              src="/assets/telegram.png" 
              alt="telegram" 
            /> 
            <img 
              className="cursor-pointer hover:opacity-60 transition pl-3 w-12 h-auto"
              src="/assets/instagram.png"
              alt="instagram"
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgb(65,50,106)] h-fit w-full flex justify-center text-justify text-sm p-5 ">
        <p className="">تمامی حقوق مادی و معنوی این سایت برای انجمن EFT RESET محفوظ می باشد._طراحی سایت دیجیتال مارکتینگ فرادید</p>
      </div>
    </div>
  );
}

export default Footer;
