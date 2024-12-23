import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "../ReviewCard/ReviewCard";
const StorySection = () => {
  const reviews = [
    {
      consultedTitle: "Consulted for Skin",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      reviewerName: "John Doe",
      date: "2024-12-22",
      location: "New York",
      rating: 5,
      reviewTitle: "One of a kind service",
      reviewDesc:
        "The consultation for my skin was exceptional. The advice I received helped me clear up my acne in just a few weeks. Highly recommend!",
    },
    {
      consultedTitle: "Consulted for Hair",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      reviewerName: "Jane Smith",
      date: "2024-12-20",
      location: "Los Angeles",
      rating: 4,
      reviewTitle: "Great experience",
      reviewDesc:
        "I consulted for hair restoration and saw noticeable improvements in just a month. The team was very knowledgeable and friendly.",
    },
    {
      consultedTitle: "Consulted for Skin",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      reviewerName: "Michael Brown",
      date: "2024-12-18",
      location: "Chicago",
      rating: 3,
      reviewTitle: "Average service",
      reviewDesc:
        "The consultation was okay, but I didn't see the immediate results I was hoping for. Will give it another try.",
    },
    {
      consultedTitle: "Consulted for Hair",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      reviewerName: "Emily White",
      date: "2024-12-15",
      location: "Miami",
      rating: 5,
      reviewTitle: "Transformative results!",
      reviewDesc:
        "Consulted for hair loss treatments and I'm thrilled with the results. My hair looks fuller, and I feel more confident than ever!",
    },
    {
      consultedTitle: "Consulted for Skin",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      reviewerName: "David Lee",
      date: "2024-12-10",
      location: "Dallas",
      rating: 2,
      reviewTitle: "Not satisfied",
      reviewDesc:
        "I was expecting better results after the consultation. My skin hasn't improved much, and I feel like the advice wasn't personalized.",
    },
    {
      consultedTitle: "Consulted for Hair",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      reviewerName: "Sophia Green",
      date: "2024-12-05",
      location: "Houston",
      rating: 4,
      reviewTitle: "Good service, but could improve",
      reviewDesc:
        "I consulted for hair treatment, and the service was good. However, the process took longer than expected. Still, the results were worth it.",
    },
  ];

  return (
    <div className="bg-yellow-50 mt-24 pt-10 pb-14 px-5 lg:px-10">
      <SectionTitle heading={"STORIES FROM OUR VALUED CUSTOMERS!"} />

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
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StorySection;
