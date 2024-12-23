import ApproachSection from "../../component/ApproachSection/ApproachSection";
import Banner from "../../component/Banner/Banner";
import BGBanner from "../../component/BGBanner/BGBanner";
import ConsultationsApart from "../../component/ConsultationsApart/ConsultationsApart";
import DiscoverAyurveda from "../../component/DicoverAyurveda/DiscoverAyurveda";
import MeetExpert from "../../component/MeetExpert/MeetExpert";
import StorySection from "../../component/StorySection/StorySection";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <Banner />

      {/* Discover Ayurveda section */}
      <DiscoverAyurveda />

      {/* ConsultationsApart */}
      <ConsultationsApart />

      {/* BG Banner section */}
      <BGBanner />

      {/* Approach section */}
      <ApproachSection />

      {/* story section */}
      <StorySection />

      {/*Meet Expert section */}
      <MeetExpert />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
