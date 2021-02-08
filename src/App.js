import { useEffect, useState } from "react";
import Logo from "./Logo.png";
import Confetti from "react-dom-confetti";

const Button = ({ label, link, style }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      style={{
        textAlign: "center",
        padding: 20,
        margin: 8,
        borderRadius: 16,
        border: "4px solid black",
        fontSize: 12,
        // background: "black",
        color: "black",
        fontFamily: "Montserrat",
        textDecoration: "none",
        textTransform: "uppercase",
        ...style,
      }}
      href={link}
    >
      {label}
    </a>
  );
};

function App() {
  const [prize, setPrize] = useState();
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    const merch = ["Pens", "Hand San", "Sticky Notes"];
    let looper = setInterval(() => {
      setPrize(merch[Math.floor(Math.random() * merch.length)]);
    }, 30);
    setTimeout(function () {
      setComplete(true);
      clearInterval(looper);
    }, 3000);
  }, []);
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
      <div style={{ alignSelf: "center" }}>
        <img
          src={Logo}
          alt="Enactus UNSW"
          style={{ width: 240, paddingBottom: 40, paddingTop: 40 }}
        />
      </div>

      <div style={{ fontFamily: "Montserrat" }}>YOU HAVE WON</div>

      <div
        style={{
          alignSelf: "center",
          fontFamily: "Montserrat",
          fontSize: 40,
          minHeight: 240,
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {prize}!
      </div>

      <div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          paddingBottom: 40,
        }}
      >
        <Button
          label="ENTER OUR GIVEAWAY"
          link="https://enactus.page.link/giveaway/"
          style={{
            padding: 40,
            fontSize: 16,
            background: "black",
            color: "#FFC222",
          }}
        />
        <Button
          label="APPLY FOR T1 RECRUITMENT"
          link="https://www.facebook.com/events/136839811613301"
          style={{
            padding: 40,
            fontSize: 16,
            background: "black",
            color: "#FFC222",
          }}
        />

        <Button label="Facebook" link="https://www.facebook.com/enactusunsw/" />
        <Button label="Instagram" link="https://instagram.com/enactus.unsw/" />
        <Button
          label="LinkedIn"
          link="https://au.linkedin.com/school/enactus-unsw/"
        />
        <Button label="Newsletter" link="http://eepurl.com/gi4Ud9" />
        <Button label="Website" link="https://enactusunsw.org/" />
      </div>
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
