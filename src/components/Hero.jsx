function Hero() {
  return (
    <div
      name="hero"
      className="  bg-blend-darken bg-black/60  h-[80vh] bg-no-repeat bg-cover bg-fixed bg-[url('https://images.pexels.com/photos/7935684/pexels-photo-7935684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
      <div className="flex flex-col pt-36 w-4/5 m-auto justify-start items-start gap-8">
        <span className="bg-green-500 font-normal rounded-full py-2 px-4 text-sm font-['Roboto'] text-white">
          Welcome To The Best Retirement Home
        </span>
        <h1 className="text-7xl font-bold max-w-md text-white">
          Love & Care <sup className=" text-xl mr-2 font-light">For</sup>
          <span className="text-blue-400">Seniors</span>{" "}
        </h1>
        <p className="text-white text-sm font-['Roboto']">
          Most Carefull House In Senior Care
        </p>
        <button className=" hover:bg-blue-700 transition duration-500 ease-in-out rounded-full bg-blue-500  font-normal py-4 px-12 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
