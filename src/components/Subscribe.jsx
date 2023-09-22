import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Subscribe() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const patient = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://fair-teal-bison-tutu.cyclic.cloud/patients", patient)
      .then(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setTimeout(() => {
          setSuccess(true);
        }, 1000);
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setTimeout(() => {
          setError(false);
        }, 7000);
        console.log(error);
      });
  };
  return (
    <div
      className="min-h-screen bg-white flex justify-center items-center "
      name="joinUs">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-center text-xl font-bold">{t("welcome to at")}</h1>
        <h2 className="text-3xl text-cyan-700 font-normal mb-8  text-center">
          Djerba
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2">
              {t("full name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2">
              {t("phone")}
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="+01-123-456-789"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2">
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              className="border rounded-lg w-full py-2 px-3 text-gray-700 h-32 resize-none focus:outline-none focus:border-blue-500"
              placeholder={t("msg")}
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          {error && (
            <div className="alert alert-error bg-red-500">
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
              <span className="text-white text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success bg-green-500">
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
              <span className="text-white text-sm">
                Welcome, You Just Joined Us!
              </span>
            </div>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="bg-green-700 text-white  py-2 px-8 rounded-lg hover:bg-blue-950 duration-500 ease-in-out focus:outline-none focus:bg-green-700">
              {t("join now")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
