function Contact() {
  return (
    <div
      name="contact"
      className=" bg-orange-200/80 py-12 md:py-0  md:mt-52 mt-[70rem] mb-0">
      <section className="grid grid-cols-2  place-content-center h-screen w-full items-start gap-16">
        <div className="flex flex-col lg:w-11/12 lg:mx-auto pl-8 lg:pl-24 gap-8">
          <span className="text-xl  w-fit  text-white bg-blue-950 rounded-full px-6 lg:px-16  py-2 uppercase">
            Contact
          </span>
          <h1 className="text-6xl max-w-xl">Let's get in touch with us</h1>
          <p className="font-['Roboto'] text-gray-500 ">
            If you're interested to know more about us, we'd love to hear from
            you!
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-semibold  text-blue-950">
              +123-456-7890
            </span>
            <span className="text-[1.1rem] font-normal text-gray-700 ">
              www.reallygreatsite.com
            </span>
            <span className="text-[1.1rem] font-normal text-gray-700 ">
              hello@reallygreatsite.com
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[70%] ">
          <div className="flex flex-col lg:flex lg:flex-row gap-8 lg:gap-10">
            <input
              className="h-[3rem] lg:w-[45%] outline-none pl-4"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-[3rem] lg:w-[45%] outline-none pl-4"
              type="text"
              placeholder="Email"
            />
          </div>
          <input
            className="h-[3rem] w-[98%] outline-none pl-4"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-[98%] outline-none pt-4 pl-4"
            placeholder="Message"
            rows="7"></textarea>
          <button className="rounded-full text-xl px-8 py-2 ring-1 ring-blue-950 hover:bg-blue-950 w-fit hover:text-white transition-colors duration-500 ease-in-out">
            Let's Chat
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
