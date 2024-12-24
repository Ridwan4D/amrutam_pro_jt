import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import DoctorCard from "../../component/DoctorCard/DoctorCard";

const FindDoctor = () => {
  const handleSearch = () => {
    // Add search logic here
  };

  return (
    <div className="px-2 md:px-8 lg:px-16">
      <div className="bg-[#EAF2EA] py-16">
        <h2 className="text-xl md:text-3xl font_dinpro_bold text-center mb-6">
          Find expert Doctors for an In-clinic session here
        </h2>
        {/* Select location and search inputs */}
        <div className="md:max-w-4xl mx-auto flex flex-col md:flex-row  gap-4 items-center">
          {/* Location dropdown */}
          <div className="flex items-center bg-white p-3 rounded shadow-md md:w-1/2">
            <FaMapMarkerAlt className="text-green-800 text-lg mr-2" />
            <select
              className="w-full bg-transparent outline-none text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="new_york">New York</option>
              <option value="los_angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
            </select>
          </div>
          {/* Search bar */}
          <div className="flex items-center bg-white p-3 rounded shadow-md md:w-1/2">
            <input
              type="text"
              className="w-full bg-transparent outline-none text-gray-700"
              placeholder="eg. Doctor, specialisation, clinic name"
            />
            <button
              onClick={handleSearch}
              className="ml-2 text-gray-500 hover:text-green-800"
            >
              <AiOutlineRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      {/* Filter Section */}
      <div className="bg-white py-2 border border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Expertise Select */}
          <div className="flex items-center bg-gray-100 p-3 rounded shadow-md">
            <select
              className="w-full bg-transparent outline-none text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Expertise
              </option>
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
          {/* Gender Select */}
          <div className="flex items-center bg-gray-100 p-3 rounded shadow-md">
            <select
              className="w-full bg-transparent outline-none text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Fees Select */}
          <div className="flex items-center bg-gray-100 p-3 rounded shadow-md">
            <select
              className="w-full bg-transparent outline-none text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Fees
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          {/* Language Select */}
          <div className="flex items-center bg-gray-100 p-3 rounded shadow-md">
            <select
              className="w-full bg-transparent outline-none text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Language
              </option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="mandarin">Mandarin</option>
            </select>
          </div>
          {/* All Filter Select */}
          <div className="flex items-center bg-green-100 p-3 rounded shadow-md">
            <select
              className="w-full bg-transparent outline-none text-green-800"
              defaultValue=""
            >
              <option value="" disabled>
                All Filters
              </option>
              <option value="rating">Rating</option>
              <option value="availability">Availability</option>
              <option value="distance">Distance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} find={true} />
          ))}
        </div>
      </div>
    </div>
  );
};
const doctors = [
  {
    drName: "Dr. Ananya Sharma",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    education: "Ayurveda Practitioner (BAMS, MD)",
    experience: 10,
    specialize: "Panchakarma",
    videoConsultationFee: 1500, // fee in your desired currency
  },
  {
    drName: "Dr. Raghav Kumar",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    education: "Ayurveda Practitioner (BAMS, MD)",
    experience: 8,
    specialize: "Herbal Medicine",
    videoConsultationFee: 1200,
  },
  {
    drName: "Dr. Priya Gupta",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    education: "Ayurveda Practitioner (BAMS, MD)",
    experience: 12,
    specialize: "Skin Treatments",
    videoConsultationFee: 1800,
  },
  {
    drName: "Dr. Vijay Patel",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 3,
    education: "Ayurveda Practitioner (BAMS, MD)",
    experience: 5,
    specialize: "Digestive Disorders",
    videoConsultationFee: 1000,
  },
  {
    drName: "Dr. Neha Yadav",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    education: "Ayurveda Practitioner (BAMS, MD)",
    experience: 7,
    specialize: "Stress Management",
    videoConsultationFee: 1300,
  },
  {
    drName: "Dr. Amit Mehta",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    education: "Ayurveda Practitioner (BAMS, MD)",
    experience: 15,
    specialize: "Ayurvedic Massage",
    videoConsultationFee: 2000,
  },
];

export default FindDoctor;
