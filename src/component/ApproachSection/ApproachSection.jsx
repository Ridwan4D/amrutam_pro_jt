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
    <div className="px-2 md:px-0">
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
        className="mySwiper mt-10"
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {approachData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-5 border-t-4 border-green-800 rounded-xl shadow-md bg-yellow-50 flex flex-col items-center space-y-4 text-center min-h-64">
              <div className="w-16 h-16 bg-green-900/60 rounded-full flex items-center justify-center text-5xl text-white font_dinpro_bold">
                <h3>{item.step}</h3>
              </div>
              <h3 className="text-2xl font-bold mb-2 font_dinpro_bold base_text">
                {item.title}
              </h3>
              <p className="text-zinc-800 text-xl">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ApproachSection;
