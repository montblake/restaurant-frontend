import "./styles.scss";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
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
