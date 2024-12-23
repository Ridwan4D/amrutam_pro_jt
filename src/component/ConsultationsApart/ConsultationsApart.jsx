import SectionTitle from "../SectinTitle/SectionTitle";

const ConsultationsApart = () => {
  return (
    <div className="bg-yellow-50 py-10 md:py-14 lg:py-20">
      {/* Section title */}
      <SectionTitle heading={"What sets Ayurvedic consultations apart?"} />

      {/* Page content */}
      <div className="mt-14 px-5 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
          {/* Main Quote Section */}
          <div className="xl:space-y-4 base_text bg-white py-8 px-4 md:px-6 rounded-lg shadow-md border-t-4 border-green-800 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl xl:text-3xl font_inknut_antiqua font-medium">
              स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।&ldquo;
            </h2>
            <p className="text-base md:text-lg lg:text-base xl:text-lg">
              [ Meaning: The Goal of Ayurveda is to maintain the health of a
              healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>

          {/* Features and Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-5 md:gap-8 lg:gap-10">
            <div className="rounded-lg shadow-md border-t-4 border-green-800">
              <img
                src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734894974/apart-image-1_hnqgol.jpg"
                alt=""
                className="w-full h-40 sm:h-52 lg:h-64 rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4 base_text bg-white p-5 md:p-6 rounded-lg shadow-md border-t-4 border-green-800 h-full flex flex-col justify-between">
              <h2 className="text-xl lg:text-2xl font_dinpro_bold font-medium">
                Precise Diagnosis
              </h2>
              <p className="text-base md:text-lg lg:text-base xl:text-lg">
                Ayurveda&apos;s core principles revolve around Vata, Pitta, and
                Kapha doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-10 mt-5 lg:mt-10">
          {/* More Features and Images */}
          <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-8 mt-5 md:mt-0">
            <div className="space-y-4 base_text bg-white p-5 md:p-6 rounded-lg shadow-md border-t-4 border-green-800 h-full flex flex-col justify-between flex-1">
              <h2 className="text-xl md:text-lg lg:text-xl xl:text-2xl font_dinpro_bold font-medium">
                Zero side-effects
              </h2>
              <p className="text-base md:text-lg lg:text-base xl:text-lg">
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs.
              </p>
            </div>
            <div className="rounded-lg shadow-md border-t-4 border-green-800 flex-1">
              <img
                src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734894973/apart-image-2_lgbodp.png"
                alt=""
                className="w-full h-40 sm:h-52 lg:h-64 rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row gap-5 md:gap-8 mt-5 md:mt-0">
            <div className="flex-1 space-y-4 base_text bg-white p-5 md:p-6 rounded-lg shadow-md border-t-4 border-green-800 h-full flex flex-col justify-between">
              <h2 className="text-xl md:text-lg lg:text-xl xl:text-2xl font_dinpro_bold font-medium">
                Individual Treatment
              </h2>
              <p className="text-base md:text-lg lg:text-base xl:text-lg">
                All Treatments are personalized based on a person&apos;s unique
                constitution and health concerns.
              </p>
            </div>
            <div className="flex-1 rounded-lg shadow-md border-t-4 border-green-800">
              <img
                src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734894973/apart-image-3_bi6dwc.jpg"
                alt=""
                className="w-full h-40 sm:h-52 lg:h-64 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationsApart;
