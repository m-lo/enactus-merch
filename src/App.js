import { useEffect, useState } from "react";
import Logo from "./Logo.png";
import Confetti from "react-dom-confetti";
import draw from "./draw";

const Button = ({ label, link, style, ...rest }) => {
  return (
    <button
      target="_blank"
      rel="noreferrer"
      style={{
        textAlign: "center",
        padding: 20,
        margin: 8,
        borderRadius: 16,
        border: "4px solid black",
        fontSize: 12,
        background: "black",
        color: "#ffc222",
        fontFamily: "Montserrat",
        textDecoration: "none",
        textTransform: "uppercase",
        cursor: "pointer",
        outline: "none",
        boxShadow: "none",
        ...style,
      }}
      {...rest}
      // href={link}
    >
      {label}
    </button>
  );
};

function App() {
  const [prize, setPrize] = useState();
  const [complete, setComplete] = useState(false);
  const [hover, setHover] = useState(false);

  function picker() {
    let looper = setInterval(() => {
      setPrize(draw[Math.floor(Math.random() * draw.length)]);
    }, 25);
    setTimeout(function () {
      setComplete(true);
      clearInterval(looper);
    }, 5000);
  }

  useEffect(() => {
    if (complete) setComplete(false);
  }, [complete]);
  return (
    <div
      style={{
        background: "#FFC222",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: " center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {/* <div style={{ alignSelf: "center", marginTop: 40 }}>
        <img
          src={Logo}
          alt="Enactus UNSW"
          style={{ width: 200, paddingBottom: 40, paddingTop: 40 }}
        />
      </div> */}

      <div
        style={{
          fontFamily: "Montserrat",
          marginTop: 600,
          textAlign: "center",
        }}
      >
        THE WINNER IS
        <br />
        {!prize && ". . ."}
      </div>
      {!prize && (
        <Button
          label="Pick Winner"
          onClick={picker}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            transition:
              "color 0.2s ease, background 0.2s ease, border-radius 0.8s ease",
            background: hover ? "black" : "none",
            color: hover ? "#FFC222" : "black",
            borderRadius: hover ? 200 : 0,
          }}
        />
      )}

      <div
        style={{
          alignSelf: "center",
          fontFamily: "Montserrat",
          fontSize: 24,
          minHeight: 80,
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {prize}
      </div>
      <div style={{ flexGrow: 1, margin: 20 }} />
      <Confetti
        active={complete}
        config={{
          spread: 60,
          startVelocity: 120,
          elementCount: 320,
          stagger: 0.4,
        }}
      />
    </div>
  );
}

export default App;
