import "./App.css";
import Header from "./components/header/Header";

import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
