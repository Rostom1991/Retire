import { motion, easeInOut } from "framer-motion";
import location from "../assets/Nimg/location.svg";
import nextPic from "../assets/Nimg/nextPic.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function Localisation() {
  const djerba1 =
    "https://news.gnet.tn/wp-content/uploads/2022/11/25339-share-image.jpg";
  const djerba2 =
    "https://res.cloudinary.com/lastminute-contenthub/s--Du5hQ761--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Africa/Tunisia/Djerba/eyeem-100000360-142868749";
  const djerba3 =
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/308647036.jpg?k=bb758ed6422540d40bf4ef767496e6ce205c6dbd5e938a424be137dcd19dc1ed&o=&hp=1";
  const { t } = useTranslation();
  const images = [djerba1, djerba2, djerba3];
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" grid place-content-center  my-20 lg:mt-0 mt-[10rem]  ">
      <div className="lg:flex lg:flex-row flex flex-col  shadow-2xl shadow-gray-400  ">
        <div key={currentImage} className="lg:w-1/2   relative ">
          <div
            onClick={nextImage}
            className="bg-orange-300 z-10 absolute top-[50%] cursor-pointer right-4 hover:bg-orange-400 rounded-full w-[2rem] h-[2rem] p-2">
            <img className="w-full " src={nextPic} alt="next" />
          </div>
          <div className="h-full w-full">
            <motion.img
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: easeInOut, delay: 0.1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
              src={images[currentImage]}
              loading="lazy"
              alt="djerba"
            />
          </div>
          <div
            onClick={prevImage}
            className="bg-orange-300 z-10 absolute top-[50%] left-4 cursor-pointer hover:bg-orange-400 rounded-full w-[2rem] h-[2rem] p-2">
            <img className="w-full rotate-180" src={nextPic} alt="prev" />
          </div>
        </div>
        <div className="flex flex-col items-center px-8 justify-center pt-12 gap-8 lg:w-1/2 bg-orange-200 ">
          <h1 className="text-blue-950 font-semibold text-2xl lg:text-5xl">
            {t("where")}
          </h1>
          <p className="text-gray-700 lg:text-lg text-sm max-w-sm px-8  lg:max-w-lg ">
            {t("local")}
          </p>
          <div className="flex items-center pr-10 pb-6 gap-1">
            <img className="md:w-[3rem] w-[2.5rem] " src={location} alt="" />
            <span className="md:text-xl  font-semibold text-blue-950">
              {t("djerba")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Localisation;
