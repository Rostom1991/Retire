import { useTranslation } from "react-i18next";

function Hotel() {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col md:gap-[27rem] pt-12">
      {/* ADMINISTRATION */}
      <section className="w-3/4 mx-auto md:h-screen ">
        <span className="bg-green-500 text-sm text-white rounded-full px-4 py-1">
          {t("team1")}
        </span>{" "}
        <h1 className="md:text-6xl text-4xl font-thin mb-16">{t("admin")}</h1>
        <div className="grid md:grid-cols-3 place-items-center gap-y-12 w-full">
          <div className="flex flex-col gap-4 items-center">
            <div className="h-[25rem] rounded-xl overflow-hidden shadow-left-right">
              <img
                loading="lazy"
                className="h-full w-full rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="director"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-blue-950 text-sm font-bold">Jane Doe</h2>
              <h1 className="text-gray-700 text-xl font-thin">
                {t("director")}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="h-[25rem] rounded-xl overflow-hidden shadow-left-right">
              <img
                loading="lazy"
                className="h-full w-full rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                src="https://img.freepik.com/premium-photo/smiling-young-indian-business-man-wears-suit-office-vertical-portrait_562687-2659.jpg"
                alt="interim"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-blue-950 text-sm font-bold">John Doe</h2>
              <h1 className="text-gray-700 text-xl font-thin">
                {t("interim")}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-[25rem] rounded-xl overflow-hidden shadow-left-right">
              <img
                loading="lazy"
                className="h-full w-full rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer"
                src="https://images.pexels.com/photos/4491476/pexels-photo-4491476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="hrd"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-blue-950 text-sm font-bold">Jane Doe</h2>
              <h1 className="text-gray-700 text-xl font-thin">{t("hrd")}</h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-[25rem] rounded-xl overflow-hidden shadow-left-right">
              <img
                loading="lazy"
                className="h-full w-full rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="represent"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-blue-950 text-sm font-bold">John Doe</h2>
              <h1 className="text-gray-700 text-xl font-thin">
                {t("represent")}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-[25rem] rounded-xl overflow-hidden shadow-left-right">
              <img
                loading="lazy"
                className="h-full w-full rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer "
                src="https://images.pexels.com/photos/5206931/pexels-photo-5206931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="pharma"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-blue-950 text-sm font-bold">Jane Doe</h2>
              <h1 className="text-gray-700 text-xl font-thin">{t("pharma")}</h1>
            </div>
          </div>
          <div className="w-[15rem] ">
            <img
              loading="lazy"
              src="https://images.vexels.com/media/users/3/204989/isolated/preview/85b307c2e840139d25a0649ecb1c4da5-school-books-pile-illustration.png"
              alt="pharma"
            />
          </div>
        </div>
      </section>
      {/* HOTEL  */}
      <section className="w-5/6 mx-auto md:h-[70%]">
        <div className="md:text-right">
          <span className="bg-orange-500   text-sm text-white rounded-full px-4 py-1">
            {t("team2")}
          </span>{" "}
          <h1 className="md:text-6xl text-4xl font-thin  mb-16">
            {t("hotel")}
          </h1>
          <div className="grid md:grid-cols-4 gap-x-4 place-items-center gap-y-12 w-full">
            <div className="flex flex-col gap-2 items-center ">
              <div className="h-[25rem] rounded-xl overflow-hidden ">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://img.freepik.com/premium-photo/two-doctors-talking-about-file_13339-241675.jpg"
                  alt="doctors"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("doctors")}{" "}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://images.pexels.com/photos/4269202/pexels-photo-4269202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="nurces"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("nurses")}{" "}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center  gap-2">
              <div className="h-[25rem] rounded-xl  overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer"
                  src="https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="nurce"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  1 - 1 {t("nurse")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer"
                  src="https://images.pexels.com/photos/18090671/pexels-photo-18090671/free-photo-of-a-man-wearing-a-swimming-cap-and-goggles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="coach"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("coach")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer "
                  src="https://media.istockphoto.com/id/486035912/photo/driving.jpg?s=612x612&w=0&k=20&c=MYTjJcqUgO6KITWUA-IVO6spvem-wBGPXRDXvh3Ty2A="
                  alt="chauffeur"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("driver")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://images.pexels.com/photos/5794047/pexels-photo-5794047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="physio"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("physio")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://plus.unsplash.com/premium_photo-1661375309290-81a388c5417c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="ortho"
                />
              </div>
              <div className="flex flex-col items-center ">
                <h1 className="text-gray-700  text-xl font-thin">
                  {t("ortho")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="meals"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("meals")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hotel;
