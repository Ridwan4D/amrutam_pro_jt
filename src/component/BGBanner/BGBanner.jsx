const BGBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] md:h-[40vh] lg:h-[70vh]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/duv5fiurz/image/upload/v1734953351/section-bg_hn5sq2.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font_dinpro_thin text-yellow-50">
          Ready to restore harmony in your mind, body, and spirit?
        </h1>
        <div className="pt-6">
          <button className="bg-green-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg md:rounded-2xl font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BGBanner;
