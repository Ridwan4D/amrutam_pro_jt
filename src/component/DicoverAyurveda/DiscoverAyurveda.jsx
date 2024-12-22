import TitleWithPara from "../SectinTitle/TitleWithPara";

const DiscoverAyurveda = () => {
  const ayurvedaExercises = [
    {
      id: 1,
      title: "Personalized Wellness",
      desc: "Get treatments made just for you based on your individual doshas (body type).",
      img: "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873551/heart-bit-icon_rd0b5s.png",
      img_bg: "#EDF5FA",
    },
    {
      id: 2,
      title: "Focus on prevention",
      desc: "Stop problems even before they start.",
      img: "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873552/ribbon-icon_bgucax.png",
      img_bg: "#EAF2EA",
    },
    {
      id: 3,
      title: "Mind-Body Connection",
      desc: "Keep your mind and body in sync for a happy life.",
      img: "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873551/meditation-icon_xjiia8.png",
      img_bg: "#FCF1F1",
    },
    {
      id: 4,
      title: "Holistic Healing",
      desc: "Fix the root problem for long-lasting health.",
      img: "https://res.cloudinary.com/duv5fiurz/image/upload/v1734883971/protection-icon_y8ryzq.png",
      img_bg: "#F5F3FC",
    },
    {
      id: 5,
      title: "Natural Remedies",
      desc: "Using herbs and natural therapies for healing.",
      img: "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873551/ayurvedi-icon_tluwrp.png",
      img_bg: "#FEF6ED",
    },
    {
      id: 6,
      title: "Boosting immunity",
      desc: "Stay strong and healthy for life, not just for today.",
      img: "https://res.cloudinary.com/duv5fiurz/image/upload/v1734873551/body-icon_mmmodr.png",
      img_bg: "#EAF2EA",
    },
  ];

  return (
    <div className="py-10 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <TitleWithPara
        heading={"Discover Ayurveda’s Magic With Us"}
        para={
          "Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a better life."
        }
      />

      {/* Section Content for large screen */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {/* Left Side Content */}
        <div className="space-y-10">
          {ayurvedaExercises.slice(0, 3).map((exercise) => (
            <div key={exercise.id} className={`flex items-center gap-4 ${exercise.id == 2 && "mr-11"}`}>
              <div className="text-right flex-1">
                <h3 className="text-lg font-semibold">{exercise.title}</h3>
                <p className="text-sm text-gray-600">{exercise.desc}</p>
              </div>
              <div
                className="w-18 h-18 rounded-full p-4 flex-shrink-0"
                style={{ backgroundColor: exercise.img_bg }}
              >
                <img
                  src={exercise.img}
                  alt={exercise.title}
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Middle Content */}
        <div
          className="relative bg-contain bg-no-repeat bg-center h-96 rounded-full flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/duv5fiurz/image/upload/v1734884582/girl-bg_xixlgp.png')",
          }}
        >
          <img
            src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734884582/girl_kqrxyh.png"
            alt="Girl Ayurveda"
            className="w-72 h-auto"
          />
        </div>

        {/* Right Side Content */}
        <div className="space-y-10">
          {ayurvedaExercises.slice(3, 6).map((exercise) => (
            <div key={exercise.id} className={`flex items-center gap-4 ${exercise.id == 5 && "ml-11"}`}>
              <div
                className="w-18 h-18 rounded-full p-4 flex-shrink-0"
                style={{ backgroundColor: exercise.img_bg }}
              >
                <img
                  src={exercise.img}
                  alt={exercise.title}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{exercise.title}</h3>
                <p className="text-sm text-gray-600">{exercise.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverAyurveda;
