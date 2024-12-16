import { useNavigate } from "react-router-dom";

const Error = () => {
  const Navigate = useNavigate();

  function HandleNavigate() {
    Navigate("/");
  }
  return (
    <>
      <h1>Error!</h1>
      <p>Try after some Time</p>
      <button onClick={HandleNavigate}>Go To Home-Page</button>
    </>
  );
};

export default Error;
