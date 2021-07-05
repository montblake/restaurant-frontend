import "./styles.scss";
import  Header from "./components/Header";
import Logo from "./components/Logo";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <section id="second-sect"></section>
      <section id="first-sect">
        <Header />
        <Logo />
        <Content />
        <Footer />
      </section>
    </div>
  );
}

export default App;
