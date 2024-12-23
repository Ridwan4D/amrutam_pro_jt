import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DoctorCard from "../DoctorCard/DoctorCard";

const MeetExpert = () => {
  const doctorsReview = [
    {
      drName: "Dr. Ananya Sharma",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      education: "Ayurveda Practitioner (BAMS, MD)",
      experience: 10,
      specialize: "Panchakarma",
    },
    {
      drName: "Dr. Raghav Kumar",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 4,
      education: "Ayurveda Practitioner (BAMS, MD)",
      experience: 8,
      specialize: "Herbal Medicine",
    },
    {
      drName: "Dr. Priya Gupta",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      education: "Ayurveda Practitioner (BAMS, MD)",
      experience: 12,
      specialize: "Skin Treatments",
    },
    {
      drName: "Dr. Vijay Patel",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 3,
      education: "Ayurveda Practitioner (BAMS, MD)",
      experience: 5,
      specialize: "Digestive Disorders",
    },
    {
      drName: "Dr. Neha Yadav",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      education: "Ayurveda Practitioner (BAMS, MD)",
      experience: 7,
      specialize: "Stress Management",
    },
    {
      drName: "Dr. Amit Mehta",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      education: "Ayurveda Practitioner (BAMS, MD)",
      experience: 15,
      specialize: "Ayurvedic Massage",
    },
  ];

  return (
    <div className="px-5 lg:px-10">
      {/* section title */}
      <SectionTitle heading={"Meet our Ayurveda experts "} />

      {/* expert content */}
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mt-10"
        breakpoints={{
          1440: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          600: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {doctorsReview.map((review, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <DoctorCard doctor={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetExpert;
