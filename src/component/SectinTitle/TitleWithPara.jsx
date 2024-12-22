import PropType from "prop-types";

const TitleWithPara = ({ heading, para }) => {
  return (
    <div className="mt-20 text-center space-y-4 max-w-3xl mx-auto">
      <h1 className="text-5xl base_text font_dinpro_bold">{heading}</h1>
      <p className="text-xl font-thin max-w-2xl mx-auto text-stone-500">
        {para}
      </p>
    </div>
  );
};
TitleWithPara.propTypes = { heading: PropType.string, para: PropType.string };
export default TitleWithPara;
