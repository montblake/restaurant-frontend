import "./styles.scss";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useEffect } from "react";


function App() {

  function handleScroll(event) {
    const logoElem = document.querySelector("#logo");
    const mainNavElem = document.querySelector(".mainNav");
    if (event.target.scrollTop < 500){
      logoElem.style.fontSize = "15vw";
      mainNavElem.style.background = "linear-gradient( black 25%, transparent 100%)";
    } else {
      logoElem.style.fontSize = "6rem";
      mainNavElem.style.background = "black";
    }
  }

  useEffect(() => {
    const overlayElem = document.querySelector('#overlay-container');
    overlayElem.addEventListener('scroll', handleScroll );
    return () => overlayElem.removeEventListener('scroll', handleScroll );
  }, []);

  


  return (
    <div className="App">
      <section id="fixed-image"></section>
      <section id="overlay-container">
        <Header />
        <Logo />
        <Content />
        <Footer />
      </section>
    </div>
  );
}

export default App;
