import PropType from "prop-types";

const TitleWithPara = ({ heading, para }) => {
  return (
    <div className="mt-10 xl:mt-20 mb-5 text-center space-y-4 max-w-2xl xl:max-w-3xl mx-auto px-8 md:px-0">
      <h1 className="text-3xl md:text-4xl xl:text-5xl base_text font_dinpro_bold">
        {heading}
      </h1>
      <p className="text-sm md:text-lg xl:text-xl font-thin max-w-2xl mx-auto text-stone-500">
        {para}
      </p>
    </div>
  );
};
TitleWithPara.propTypes = { heading: PropType.string, para: PropType.string };
export default TitleWithPara;
