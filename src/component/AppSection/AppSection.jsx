const AppSection = () => {
  return (
    <div className="bg-yellow-50 mt-14 py-10 md:py-16 lg:py-16 xl:py-28 pb-14 px-5 md:px-8 lg:px-10 md:flex items-center justify-between text-center lg:text-start mx-auto">
      {/* info side */}
      <div className="flex-1 lg:ml-10 xl:ml-36 max-w-xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl base_text font_dinpro_bold">
            Amrutam Home App
          </h2>
          <p className="text-sm md:text-base xl:text-lg text-stone-500 mt-4 md:mt-6">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
          <div className="flex-1 lg:hidden mt-6">
            <img
              src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734986002/phone_dur842.png"
              alt="Phone"
            />
          </div>
          <h3 className="text-xl md:text-2xl xl:text-3xl font_dinpro_medium mt-6 md:mt-8 lg:mt-4 xl:mt-8">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe
          </h3>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font_dinpro_bold mt-8 md:mt-20 lg:mt-10 xl:mt-20">
            Get the App now
          </h3>
          <div className="flex flex-col justify-center md:flex-row md:gap-x-6 lg:gap-x-4 mt-4">
            <img
              src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734986001/google-play_vfqleg.png"
              alt="Google Play"
              className="w-2/3 md:w-1/3 lg:w-1/2 xl:w-auto my-1 mx-auto"
            />
            <img
              src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734986001/app-store_a54dip.png"
              alt="App Store"
              className="w-2/3 md:w-1/3 lg:w-1/2 xl:w-auto my-1 mx-auto"
            />
          </div>
        </div>
      </div>
      {/* image side */}
      <div className="flex-1 hidden lg:block">
        <img
          src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734986002/phone_dur842.png"
          alt="Phone"
        />
      </div>
    </div>
  );
};

export default AppSection;
