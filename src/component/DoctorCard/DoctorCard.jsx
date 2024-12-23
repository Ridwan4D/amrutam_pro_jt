import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { RiCapsuleLine } from "react-icons/ri";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-yellow-50 pt-4 rounded-xl shadow-md flex flex-col items-center text-center space-y-5 max-w-sm w-full overflow-hidden mx-auto">
      {/* Image and Rating */}
      <div className="relative mb-4">
        <img
          src={doctor.image}
          alt={doctor.drName}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div className="absolute -bottom-4 left-3 px-5 bg-black text-white py-0 rounded-full flex items-center">
          <span>{doctor.rating}</span>
          <FaStar className="ml-1 text-yellow-500" />
        </div>
      </div>

      {/* Doctor's Information */}
      <div>
        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-800">{doctor.drName}</h3>

        {/* Education */}
        <p className="text-sm text-gray-600">{doctor.education}</p>

        {/* Experience */}
        <div className="text-gray-600 mt-1 flex items-center justify-center gap-x-1">
          <span>
            <SlGraduation className="text-lg" />
          </span>{" "}
          <p>{doctor.experience} years of experience</p>
        </div>

        {/* Specialize */}
        <div className="mt-3 flex items-center justify-center bg-green-800/10 text-green-800 px-3 py-1 rounded-full w-auto">
          <RiCapsuleLine className="mr-2" />
          <span>{doctor.specialize}</span>
        </div>
      </div>

      {/* Book a Session Button */}
      <div className="mt-5 w-full">
        <button className="w-full py-4 bg-green-800/85 text-white rounded-b-xl font_dinpro_thin hover:bg-green-700">
          Book a session
        </button>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorCard;
