import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import axios from "axios";

function App() {
  const [menu, setMenu] = useState([]);
  const [joke, setJoke] = useState("");

  // This function only runs when the button is clicked
  const fetchNewJoke = () => {
    const API_URL = import.meta.env.VITE_API_URL || "";

    // Notice it goes to /api/joke now!
    axios
      .get(`${API_URL}/api/joke`)
      .then((response) => {
        // We grab just the text from the object we sent from the backend
        setJoke(response.data.joke);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "";
    axios
      .get(`${API_URL}/api/menu`)
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section id="center">
        <h1>Hello world</h1>
        <button
          onClick={fetchNewJoke}
          style={{
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            fontSize: "15px",
            fontWeight: "500",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.2s ease",
          }}
        >
          Tell me a joke!
        </button>
        <p style={{ fontStyle: "italic" }}>{joke}</p>
        <hr />
        <p>Menu : {menu.length}</p>
        {menu.map((menu, index) => (
          <div key={menu.id}>
            <h3>{menu.name}</h3>
            <p>{menu.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
