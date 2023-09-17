import { useTranslation } from "react-i18next";
import check from "../assets/Nimg/checkbox.svg";
import { Element } from "react-scroll";
function About() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col ">
      <Element
        name="about"
        className=" bg-blue-50/20 md:mb-0 mb-24 lg:px-32 relative flex flex-col">
        <div className="md:flex items-start pt-16 md:py-32 justify-center  gap-16 w-full m-auto h-screen  ">
          <div className="flex flex-col gap-8 items-center md:justify-start px-12  ">
            <h1 className=" md:text-5xl text-4xl  md:leading-[3.5rem]  lg:mb-0   font-semibold text-blue-950 ">
              <span className="font-light text-orange-500">{t("offer")}</span>{" "}
              <br /> {t("fast")} <br />
              <span className="text-blue-500 md:text-6xl text-4xl">
                {t("health")}
              </span>
              <span className="font-light text-3xl"> {t("solutions")} </span>
            </h1>
            <h1 className="md:text-lg max-x-2xl md:leading-8 mb-16  text-gray-600 md:max-w-xl max-w-sm ">
              <span className="text-blue-950 text-2xl font-thin">Viridis</span>{" "}
              {t("intro")}
            </h1>
          </div>
          <div className="md:w-1/2 shadow-gray-400 shadow-2xl rounded">
            <img
              loading="lazy"
              className=" w-full rounded"
              src="https://images.pexels.com/photos/6749770/pexels-photo-6749770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="about us"
            />
          </div>
        </div>
      </Element>
      <section className="md:pt-0  md:flex md:flex-row flex flex-col  mx-auto lg:m-auto items-center justify-start md:gap-8  md:h-screen ">
        <div className="back2"></div>
        <div className="flex flex-col gap-8 md:mt-0 mt-16 p-8 md:items-start   md:px-24 justify-center items-center">
          <span className="bg-blue-400 py-2 px-4 text-white rounded">
            {t("why")}
          </span>
          <h1 className="md:text-5xl text-4xl max-w-lg text-blue-950">
            {t("trust")}
          </h1>
          <p className="max-w-lg bg-white rounded p-2 text-gray-600">
            {t("program")}
          </p>
          <div className="lg:flex gap-2 items-start justify-start">
            <div className="w-[4rem]">
              <img src={check} alt="check" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-semibold  text-blue-950 text-xl">
                {t("best")}
              </h1>
              <p className="max-w-md text-gray-700  text-sm">{t("we best")}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%]  mt-8 mb-0 rounded shadow-gray-700 shadow-xl">
          <img
            loading="lazy"
            className="rounded"
            src="https://images.pexels.com/photos/5790716/pexels-photo-5790716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default About;
