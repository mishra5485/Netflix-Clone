import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const TransistionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", TransistionNavBar);
    return () => {
      window.removeEventListener("scroll", TransistionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Neflix Logo "
        />

        <img
          onClick={() => {
            navigate("./profile");
          }}
          className="nav_avtar"
          src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
          alt="Avtar"
        />
      </div>
    </div>
  );
}

export default Navbar;
