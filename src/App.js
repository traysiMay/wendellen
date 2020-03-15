import React, { useState, useEffect } from "react";
import files from "./files.json";
import Lottie from "react-lottie";
import animationData from "./wendellen.json";
import "./App.css";

const smallPath = process.env.PUBLIC_URL + "/photos/sm/";
const fullPath = process.env.PUBLIC_URL + "/photos/full/";

function App() {
  const [img, setImg] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <div className="App">
      {display && (
        <div
          onClick={() => setDisplay(false)}
          style={{
            width: "100%",
            height: "100%",

            // background: "#f7dddd",
            display
          }}
        >
          <img src={fullPath + img} />
          <div>
            <a
              href={fullPath + img}
              style={{
                margin: "22px auto",
                display: "block",
                textAlign: "center",
                fontSize: "1.5rem",
                textDecoration: "none",
                fontFamily: "sans-serif",
                color: "#63d9ec"
              }}
              download
            >
              DOWNLOAD FULL RES
            </a>
          </div>
        </div>
      )}
      {!display && (
        <div>
          <Lottie options={{ autoplay: true, loop: true, animationData }} />
          {files.map(f => (
            <img
              key={f}
              onClick={() => {
                setDisplay(true);
                setImg(f);
              }}
              src={smallPath + f}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
