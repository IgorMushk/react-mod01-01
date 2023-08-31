import PropTypes from "prop-types";

export const Head = ({ clas, id, data, children }) => {
  console.log("children :>>", children);
  return (
    <>
      {children}
      <p id={id} className={clas}>
        I am Head
      </p>
    </>
  );
};

Head.protoType = {
  clas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.array,
};
