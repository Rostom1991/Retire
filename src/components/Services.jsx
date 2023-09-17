import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <div name="service">
      <header className=" lg:pl-40 md:pl-20 bg-no-repeat  flex flex-col gap-8 md:items-start items-center  justify-center bg-[url('https://www.statnews.com/wp-content/uploads/2018/12/AdobeStock_99592855.jpeg')] h-[70vh] bg-cover bg-blend-overlay bg-[#090f36]/80 bg-fixed">
        <h1 className="text-blue-950 bg-white uppercase p-4 md:text-6xl text-3xl font-normal w-fit ">
          {t("service")}
        </h1>
        <p className="text-orange-200 font-normal md:text-md text-sm flex flex-col items-center md:items-start max-w-sm md:max-w-max text-center gap-3">
          {t("viridis offer")}
          <span className="text-orange-500 font-bold text-[2.5rem] animate-pulse">
            € 2000
            <span className="text-sm  text-gray-300">/ {t("month")}</span>
          </span>
        </p>
      </header>
      <section className="pb-36">
        <div className="flex flex-col items-center justify-center gap-8 py-24">
          <span className="bg-blue-950 text-white p-3 ">
            {t("what offer")}{" "}
          </span>
          <h1 className="lg:text-4xl text-3xl text-center px-4 text-blue-950 font-normal">
            {t("we take care")}
          </h1>
          <h1 className="md:text-lg text-blue-950 p-4 text-center bg-gray-200 md:p-2 rounded font-normal">
            {t("it's difficult")}
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 w-5/6 mx-auto gap-10 lg:h-[70rem] h-[150rem] ">
          {/* CARD */}
          <div className=" flex items-start cursor-pointer  w-full hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/6663571/pexels-photo-6663571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                {t("massage")}
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  {t("2 massages")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  {t("hammam")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  {t("sauna")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/7222562/pexels-photo-7222562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                {t("pool")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  Aquagym
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  {t("pool")}
                </span>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/7544643/pexels-photo-7544643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                {t("hair")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  {t("pedicure")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  {t("manicure")}
                </span>
              </div>
            </div>
          </div>
          <div className=" flex items-start cursor-pointer  w-full hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                {t("nurcing")}
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  • {t("day nurce")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  • {t("night nurce")}
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase text-center p-2 text-2xl flex items-center justify-center  w-full h-16">
                {t("rooms")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  {t("comfortable")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  {t("webcam")}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  {t("communicate")}
                </span>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/18100111/pexels-photo-18100111/free-photo-of-people-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                {t("beach")}
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  {t("access")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  {t("private beach")}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  {t("sitting")}
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
