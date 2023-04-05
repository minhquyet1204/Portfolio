import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header/Header";

import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Loading from "./pages/Loading";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const waitTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(waitTimer);
    };
  }, []);
  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
