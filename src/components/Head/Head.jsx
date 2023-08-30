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
