import PropTypes from "prop-types";
const SMDiscoverAyurveda = ({ ayurvedaExercises }) => {
  return (
    <div className="lg:hidden">
      {/* top of the section */}
      <div
        className="relative bg-contain bg-no-repeat bg-center h-72 md:h-96 rounded-full flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/duv5fiurz/image/upload/v1734884582/girl-bg_xixlgp.png')",
        }}
      >
        <img
          src="https://res.cloudinary.com/duv5fiurz/image/upload/v1734884582/girl_kqrxyh.png"
          alt="Girl Ayurveda"
          className="w-56 md:w-72 h-auto"
        />
      </div>

      {/* exercises card */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {ayurvedaExercises.map((exercises, idx) => (
          <div
            key={idx}
            className="text-center border border-neutral-200 border-t p-4 rounded-lg space-y-2"
          >
            <div className="flex justify-center items-center">
              <img
                src={exercises.img}
                alt={exercises.title}
                style={{ backgroundColor: exercises.img_bg }}
                className="h-16 md:h-20 w-16 md:w-20 p-2 rounded-full"
              />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold">
                {exercises.title}
              </h3>
              <p className="text-xs md:text-sm  text-neutral-600">
                {exercises.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
SMDiscoverAyurveda.propTypes = {
  ayurvedaExercises: PropTypes.array,
};
export default SMDiscoverAyurveda;
