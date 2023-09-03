import location from "../assets/Nimg/location.svg";
function Localisation() {
  return (
    <div className="h-screen  grid place-content-center my-20 lg:mt-0 mt-[25rem]  ">
      <div className="lg:flex lg:flex-row flex flex-col w-full shadow-2xl shadow-gray-400">
        <div className="lg:w-1/2 ">
          <img
            src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex  flex-col items-center justify-start pt-12 gap-8 lg:w-1/2 bg-orange-200 ">
          <h1 className="text-blue-950 font-semibold text-3xl lg:text-5xl">
            Where To Find Us?
          </h1>
          <p className="text-gray-700 lg:text-lg px-8  lg:max-w-lg font-['Roboto'] ">
            Our residences are located on the island of Djerba, where Djerba
            International Airport is located, and a free shuttle is available to
            residents and their families during each visit. Dozens of flights
            connect Germany to Tunisia every day. Average flight time is 3 h 3
            min. As for the issue of remoteness, the Viridis medical residence
            for the elderly has equipped itself with the latest generation
            equipment in order to maintain the link between your relative and
            you, webcam, direct telephone line, Computerized File of the
            Resident. As you can see, everything is being done to ensure that
            families are in contact with the residents as much as possible.{" "}
          </p>
          <div className="flex items-center pb-6 gap-1">
            <img className="w-[3rem]" src={location} alt="" />
            <span className="text-xl  font-semibold text-blue-950">
              Djerba, Tunisia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Localisation;
