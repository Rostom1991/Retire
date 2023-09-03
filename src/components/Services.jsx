function Services() {
  return (
    <div name="service">
      <header className=" lg:pl-36 pl-20 bg-no-repeat bg-cover flex flex-col gap-8 items-start  justify-center bg-[url('https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[70vh] bg-blend-overlay bg-black/70 bg-fixed">
        <h1 className="text-white bg-blue-950  p-4 lg:text-6xl text-5xl font-normal w-fit ">
          SERVICES
        </h1>
        <p className="text-white font-normal text-xl flex flex-col items-center gap-2">
          VIRIDIS OFFERS ITS RESIDENTS AN ATTENTIVE SERVICE ADAPTED TO
          EVERYONE'S NEEDS FOR A PRICE STARTING FROM{" "}
          <span className="text-orange-500 font-semibold text-4xl animate-pulse">
            € 2500 / MONTH
          </span>
        </p>
      </header>
      <section className="pb-36">
        <div className="flex flex-col items-center justify-center gap-8 py-24">
          <span className="bg-blue-950 text-white p-3 ">What We Offer</span>
          <h1 className="lg:text-4xl text-3xl text-center px-4 text-blue-950 font-normal">
            We Take Care Of Senior People Who Are Generally Alone
          </h1>
          <h1 className="text-lg text-blue-950 bg-gray-200 p-2 rounded font-normal">
            It is always difficult to leave your home, which is why our
            residences, in a seaside environment, are designed to offer you
            services that are not usually found in Europe!
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 w-5/6 mx-auto gap-10 lg:h-[70rem] h-[150rem] ">
          {/* CARD */}
          <div className=" flex items-start cursor-pointer  w-full hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/6663571/pexels-photo-6663571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                Massage
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  Two massage sessions per week
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  Hammam
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  Sauna
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/7222562/pexels-photo-7222562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                Swimming Pool
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  Aquagym
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  Swimming Pool
                </span>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/7544643/pexels-photo-7544643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                Hair Saloon
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  Pedicure{" "}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  Manicure{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" flex items-start cursor-pointer  w-full hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                Nurcing
              </h1>
              <div className="flex flex-col gap-2 w-[80%] mx-auto ">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  • 07:30 - 20:30 : 130 nursing assistants and a doctor for 130
                  patients 7/7{" "}
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  • 20:30 -07:30: 3 nursing assistants and a doctor for 130
                  patients 7/7
                </span>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                Safe & Relaxed Rooms
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  Comfortable Clean Rooms
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  Rooms Equipped with Webcams
                </span>
                <span className="text-gray-200 text-center p-2 bg-blue-950 bg-opacity-25 text-xl">
                  Communicate With Loved Ones Using Our App Anytime
                </span>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="  items-start cursor-pointer  w-full  hover:scale-[1.02] hover:bg-blend-overlay hover:bg-black/30 transition-all duration-500 ease-in-out bg-cover bg-[url('https://images.pexels.com/photos/18100111/pexels-photo-18100111/free-photo-of-people-on-beach.jpeg?auto=compress&cs=tinysrgb&w=600')]  flex flex-col h-full shadow-2xl shadow-gray-700">
            <div className="flex-col flex gap-16 items-center w-full h-full justify-start bg-opacity-40">
              <h1 className="bg-gray-300 bg-opacity-75 font-semibold text-blue-950 uppercase p-2 text-2xl flex items-center justify-center  w-full h-16">
                Sandy Beach
              </h1>
              <div className="flex flex-col w-[80%] mx-auto gap-2">
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  Access To Sea Water{" "}
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  Private Sandy Beach At Your Disposal
                </span>
                <span className="text-gray-200 p-2 text-center bg-blue-950 bg-opacity-25 text-xl">
                  Perfect Sitting To Relax
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
