import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
function Hero() {
  const { t } = useTranslation();
  return (
    <div
      name="hero"
      className=" bg-blend-darken bg-black/60  h-[80vh] bg-no-repeat bg-cover bg-fixed bg-[url('https://images.pexels.com/photos/7935684/pexels-photo-7935684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
      <div className="flex flex-col pt-36 w-4/5 m-auto justify-start items-start gap-8">
        <motion.span
          initial={{ x: "-200vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-green-500 font-normal rounded-full py-2 px-4 text-sm text-white">
          {t("welcome")}
        </motion.span>
        <motion.h1
          initial={{ x: "-200vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="lg:text-[4rem] text-6xl font-bold max-w-2xl text-white">
          {t("love")} <br />{" "}
          <sup className=" text-xl mr-2 font-light">{t("for")}</sup>
          <span className="text-blue-400">{t("seniors")}</span>{" "}
        </motion.h1>
        <motion.p
          initial={{ x: "+500vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-orange-200 text-sm font-['Roboto']">
          {t("house")}
        </motion.p>
        <Link to="joinUs" spy={true} smooth={true} offset={-70} duration={1000}>
          <motion.button
            initial={{ x: "+500vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className=" hover:bg-blue-700 transition duration-500 ease-in-out rounded-full bg-blue-500  font-medium py-4 px-12 text-white">
            {t("start")}
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
