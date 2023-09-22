import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const user = {
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    subject: inputSubject,
    message: inputMessage,
  };
  const submitContact = async (e) => {
    e.preventDefault();
    await axios
      .post("https://fair-teal-bison-tutu.cyclic.cloud/contacts", user)
      .then((response) => {
        console.log(response.data);
        setTimeout(() => {
          setSuccess(true);
        }, 1000);
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
        setInputName("");
        setInputEmail("");
        setInputPhone("");
        setInputSubject("");
        setInputMessage("");
      })
      .catch((error) => {
        setError(error.response.data.error);
        setTimeout(() => {
          setError(false);
        }, 5000);
        console.log(error.response.data.error);
      });
  };
  return (
    <div
      name="contact"
      className=" bg-zinc-100 py-60 md:py-0  md:mt-52 mt-[10rem]  ">
      <section className="grid md:grid-cols-2  place-content-center h-screen w-full items-start gap-16">
        <div className="flex flex-col lg:w-11/12 lg:mx-auto pl-8 lg:pl-24 gap-6">
          <h1 className="md:text-6xl text-5xl px-4 max-w-xl">
            {t("get in touch")}
          </h1>
          <p className=" text-gray-500 ">{t("interested")}</p>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-semibold  text-blue-950">
              +216 52 530 163
            </span>
            {/* <span className="text-[1.1rem] font-normal text-gray-700 ">
              www.reallygreatsite.com
            </span> */}
            <span className="text-[1.3rem] font-normal  text-blue-700 ">
              careers@viridis-it.com
            </span>
          </div>
          <div className="md:w-full w-1/3 h-1/2">
            <iframe
              className="w-[20rem] md:w-[25rem] h-[15rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105989.77099965347!2d10.773810338799201!3d33.88500892654274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aaa5dffb257fbd%3A0x2764a49fbf7e9b6c!2sMarina%20djerba!5e0!3m2!1sen!2stn!4v1694125469495!5m2!1sen!2stn"
              allowFullScreen
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="md:pt-4">
          <form
            onSubmit={submitContact}
            className="flex flex-col md:gap-6 gap-4 w-[60%] mx-auto ">
            <div className="flex flex-col md:gap-6 gap-4 w-full">
              <input
                className="h-[3rem] lg:w-[100%] outline-none pl-4 border-2 border-gray-300 rounded"
                type="text"
                placeholder={t("full name")}
                required
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />

              <input
                className="h-[3rem] lg:w-[100%] outline-none pl-4 border-2 border-gray-300 rounded"
                type="text"
                placeholder="Email"
                required
                onChange={(e) => setInputEmail(e.target.value)}
                value={inputEmail}
              />
            </div>
            <input
              className="h-[3rem] w-[100%] outline-none pl-4 border-2 border-gray-300 rounded"
              type="number"
              placeholder={t("phone")}
              required
              onChange={(e) => setInputPhone(e.target.value)}
              value={inputPhone}
            />
            <input
              className="h-[3rem] w-[100%] outline-none pl-4 border-2 border-gray-300 rounded"
              type="text"
              placeholder={t("subject")}
              required
              onChange={(e) => setInputSubject(e.target.value)}
              value={inputSubject}
            />
            <textarea
              onChange={(e) => setInputMessage(e.target.value)}
              className="w-[100%] outline-none pt-4 pl-4 border-2 border-gray-300 rounded"
              placeholder={t("msg")}
              required
              value={inputMessage}
              rows="7"></textarea>
            <div
              className={` ${
                error
                  ? "alert w-[100%] transition-all delay-1000 bg-red-500 text-sm font-['Roboto'] font-normal text-white"
                  : "hidden"
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span> {error} </span>
            </div>
            <div
              className={` ${
                success
                  ? "alert w-[70%] transition-all delay-1000 bg-green-500 text-sm font-['Roboto'] font-normal text-white"
                  : "hidden"
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your message has been sent!</span>
            </div>
            <button
              type="submit"
              className="rounded-lg  text-lg px-16 py-2 hover:bg-blue-950 text-white bg-green-600 hover:text-white w-fit  transition-colors duration-500 ease-in-out">
              {t("contact")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
