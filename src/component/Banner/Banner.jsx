const Banner = () => {
  const services = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873551/mgs-icon_f9kfne.png",
      title: "Convenient online & In-clinic consultations",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873552/shild-icon_dxgbvg.png",
      title: "Safe and effective treatment",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873551/doctor-icon_kr9zwk.png",
      title: "Experienced Ayurvedic Practitioners",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873552/text-icon_wratws.png",
      title: "Personalized Treatment Plans & Guidance",
    },
  ];
  return (
    <div className="relative bg-yellow-50">
      {/* Banner content Wrapper */}
      <div className="relative flex h-[500px] md:h-[450px] lg:h-[600px]">
        {/* Overlay for large screens (left to right) */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black to-transparent lg:opacity-50 opacity-0 lg:z-10 z-0"></div>

        {/* Overlay for mobile/medium devices (top to bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b lg:hidden from-black via-black to-transparent opacity-50 z-10"></div>

        {/* Color Div */}
        <div className="flex-1 relative bg-gradient-to-r from-red-950 via-red-900 to-red-900 hidden lg:block"></div>

        {/* Large screen image */}
        <div
          className="flex-1 relative bg-cover bg-center transform scale-x-[-1] hidden md:block"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/duv5fiurz/image/upload/v1734801400/man-large-s_m71437.jpg')`,
          }}
        ></div>

        {/* Small screen image */}
        <div
          className="flex-1 relative bg-cover bg-center transform md:hidden"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/duv5fiurz/image/upload/v1734866680/85372b9b89239293b1c75db89c0bf0f4_dkevtl.jpg')`,
          }}
        ></div>

        {/* Content Section */}
        <div className="absolute top-0 z-20 bg-gradient-to-r from-black/50 via-black/40 to-black/0 w-full h-full font_dinpro_thin md:font_dinpro_bold">
          <div className="w-64 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:w-auto space-y-4 lg:space-y-6 mt-20 ml-8 sm:ml-12 lg:ml-24 text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-50">
              Welcome to Amrutam
            </h2>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug font_dinpro_bold">
              Step into Holistic Healing with Ayurveda Book Consultation with
              Certified Experts.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-300">
              Dive into the world of Ayurveda and experience personalized health
              solutions and holistic guidance from trusted Ayurvedic doctors —
              anytime, anywhere.
            </p>
            <div className="pt-6">
              <button className="bg-green-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg md:rounded-2xl text-base sm:text-lg md:text-xl">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* banner service */}
      <div className="pt-8 lg:py-8 text-green-800 font_dinpro_thin grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {/* mapping the services */}
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 pb-6 px-6 lg:px-20 xl:px-0 border-b-2 lg:border-b-0 border-blue-50"
          >
            <div className="h-14 w-20 flex items-center justify-center rounded-full border border-green-800">
              <img src={service.image} alt="msg-icon" className="h-10 w-10" />{" "}
            </div>
            <h3 className="text-lg">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
