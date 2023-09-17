import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <div className="h-full md:pb-72 pb-[50rem] " name="service">
      <header className=" lg:pl-40 md:pl-20 bg-no-repeat  flex flex-col gap-8 md:items-start items-center  justify-center bg-[url('https://www.statnews.com/wp-content/uploads/2018/12/AdobeStock_99592855.jpeg')] h-[70vh] bg-cover bg-blend-overlay bg-[#090f36]/80 bg-fixed">
        <h1 className="text-blue-950 shadow-2xl shadow-white/75 bg-white uppercase p-4 md:text-6xl text-5xl font-normal w-fit ">
          {t("service")}
        </h1>
        <h2 className="text-blue-100 md:text-xl  md:text-left text-center max-w-[62rem] lg:max-w-[55rem] font-light bg-black/60 p-2 rounded">
          {t("through")}{" "}
        </h2>
        <p className="text-orange-300 font-normal text-xs flex flex-col items-center md:items-start max-w-sm md:max-w-max text-center gap-3">
          {t("viridis offer")}
          <span className="text-orange-500 font-bold text-[2.5rem] animate-pulse">
            € 2000
            <span className="text-sm  text-gray-300">/ {t("month")}</span>
          </span>
        </p>
      </header>
      <section className="h-full">
        <div className="flex flex-col items-center justify-center gap-8 pt-10">
          <span className="bg-blue-950 text-white p-3 ">
            {t("what offer")}{" "}
          </span>
          <h1 className="lg:text-center px-4 text-blue-950 font-normal">
            {t("we take care")}
          </h1>
          <h1 className="md:text-md max-w-full text-blue-950 p-4 md:mb-8 text-center bg-gray-200 md:py-2 md:px-2 rounded font-normal">
            {t("it's difficult")}
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:py-8  w-4/5 mx-auto gap-16 lg:h-[70rem] h-[150rem] ">
          {/* CARD */}
          <div className=" ring-2 ring-white/50  rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem]flex items-start cursor-pointer   hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/6663571/pexels-photo-6663571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col  shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("massage")}
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("2 massages")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("hammam")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("sauna")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("steam")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className=" ring-2 ring-white/50  rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] items-start cursor-pointer    hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/7222562/pexels-photo-7222562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col  shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("pool")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  Aquagym
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("pool")}
                </span>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className=" ring-2 ring-white/50 rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] items-start cursor-pointer hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/7544643/pexels-photo-7544643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("hair")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("pedicure")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("manicure")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className=" ring-2 ring-white/50  rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] flex items-start cursor-pointer hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600')]  flex flex-col  shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-8 md:gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("nurcing")}
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  • {t("day nurce")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  • {t("night nurce")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className=" ring-2 ring-white/50  rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] items-start cursor-pointer  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col  shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-8 md:gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase text-center p-2  flex items-center justify-center  w-full h-16">
                {t("rooms")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("comfortable")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("webcam")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("communicate")}
                </span>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className=" ring-2 ring-white/50  rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] items-start cursor-pointer  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/18100111/pexels-photo-18100111/free-photo-of-people-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600')]  flex flex-col shadow-2xl shadow-gray-700">
            <div className="flex-col flex md:gap-16 gap-8 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("beach")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("access")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("private beach")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("sitting")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className=" ring-2 ring-white/50  flex items-start cursor-pointer  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1661286669112-828990cb16a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')]  flex flex-col rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-8 md:gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("workshops")}
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("various")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("stimulate")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className=" ring-2 ring-white/50  flex items-start cursor-pointer  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')]  flex flex-col rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("surveillance")}
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("24/7")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("security")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className=" ring-2 ring-white/50  flex items-start cursor-pointer  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.unsplash.com/photo-1640622302099-f10b18de7b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')]  flex flex-col rounded-full overflow-hidden lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[20rem] shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-8 md:gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2  flex items-center justify-center  w-full h-16">
                {t("family")}
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-50 ">
                  {t("loved ones")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-50 ">
                  {t("privacy")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
