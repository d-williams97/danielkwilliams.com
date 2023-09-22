import {useState, useEffect} from 'react';
import "./App.css";
import "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Preloader from './components/preloader/Preloader';
import Experience from './components/experience/Experience';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

  return (
    <>
    <Preloader loading={loading}/>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Experience/>
      <Contact />
      <Footer />
    </>
  
  );
}

export default App;
