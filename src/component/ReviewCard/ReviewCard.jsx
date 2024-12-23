import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa"; // Importing the FaStar icon for the rating stars

const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      {/* Top Layer */}
      <div className="bg-lime-100 hover:bg-violet-100 p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {review?.consultedTitle}
        </h3>
      </div>

      {/* Second Layer */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={review?.image}
              alt="reviewer"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-700">
              {review?.reviewerName}
            </p>
            <p className="text-sm text-gray-500">{review?.location}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">{review?.date}</div>{" "}
        {/* Styling the date */}
      </div>

      {/* Third Layer: Rating */}
      <div className="px-4 py-1 flex items-center">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < review?.rating ? "#F59E0B" : "#D1D5DB"} // Yellow for filled, gray for empty stars
              size={20} // Adjust the size of the stars
            />
          ))}
        </div>
      </div>

      {/* Fourth Layer: Review Title */}
      <div className="px-4 py-1">
        <h4 className="text-lg font-bold text-gray-900">
          “{review?.reviewTitle}”
        </h4>
      </div>

      {/* Fifth Layer: Review Description */}
      <div className="p-4 text-gray-700">
        <p>{review?.reviewDesc}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired, // Ensure review prop is required and an object
};

export default ReviewCard;
