import PropTypes from "prop-types";

const LargeDiscoverAyurveda = ({ ayurvedaExercises }) => {
  return (
    <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      {/* Left Side Content */}
      <div className="space-y-10">
        {ayurvedaExercises.slice(0, 3).map((exercise) => (
          <div
            key={exercise.id}
            className={`flex items-center gap-4 ${exercise.id == 2 && "mr-11"}`}
          >
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
          <div
            key={exercise.id}
            className={`flex items-center gap-4 ${exercise.id == 5 && "ml-11"}`}
          >
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
  );
};
LargeDiscoverAyurveda.propTypes = {
  ayurvedaExercises: PropTypes.array,
};
export default LargeDiscoverAyurveda;
