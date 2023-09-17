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
                className="h-full w-full rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="director"
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
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://images.pexels.com/photos/14438786/pexels-photo-14438786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer"
                  src="https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="nurce"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  1 - 1 {t("nurse")} (€130)
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
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
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 duration-700 cursor-pointer "
                  src="https://images.pexels.com/photos/6827319/pexels-photo-6827319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://images.pexels.com/photos/5794025/pexels-photo-5794025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="physio"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("physio")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
                  className="h-full w-full border-gray-300 border-[2px] rounded-xl transition-transform transform object-cover hover:scale-110 cursor-pointer duration-700"
                  src="https://images.pexels.com/photos/6191927/pexels-photo-6191927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="ortho"
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-700 text-xl font-thin">
                  {t("ortho")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-[25rem] rounded-xl overflow-hidden">
                <img
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
