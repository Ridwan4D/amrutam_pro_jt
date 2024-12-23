import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SectionTitle from "../SectionTitle/SectionTitle";

const ApproachSection = () => {
  const approachData = [
    {
      step: 1,
      title: "Make Appointment",
      desc: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      step: 2,
      title: "Consultations",
      desc: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      step: 3,
      title: "Treatment Planning",
      desc: "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      step: 4,
      title: "Maintenance",
      desc: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <SectionTitle
        heading={"Our Ayurvedic Approach"}
        para={
          "At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions."
        }
      />

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {approachData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-bold mb-2">
                Step {item.step}: {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ApproachSection;
