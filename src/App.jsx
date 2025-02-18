import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
