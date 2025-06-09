import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const navigate = useNavigate();

  const sayYes = () => {
    navigate("/date");
  };

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 300) - 100;
    const randomY = Math.floor(Math.random() * 300) - 100;
    setNoButtonStyle({
      position: "relative",
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: "all 0.1s ease",
    });
  };

  return (
    <body>
      <div className="container">
        <div className="gifContainer">
          <h1>Would you like to go on a date with me ? {":')"}</h1>
          <img
            className="gifImage"
            src="https://media.tenor.com/NC9S9-pqbzkAAAAi/lucu-cute-cat.gif"
          />
        </div>
        <div className="buttonContainer">
          <button className="primaryButton" onClick={sayYes}>
            Yes
          </button>
          <button
            className="secondaryButton"
            onClick={moveNoButton}
            style={noButtonStyle}
          >
            No
          </button>
        </div>
      </div>
    </body>
  );
};

export default Home;
