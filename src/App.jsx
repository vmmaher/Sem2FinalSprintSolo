import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Games from "./Games";
import Contact from "./Contact";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = darkMode ? "dark-mode" : "light-mode";
    document.body.className = theme;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <header>
          <div className="headbox">
            <div className="nametitle">
              <h3>&lt; vanessa maher &gt;</h3>
              <Link to="/"><h1>myPortfolio()</h1></Link>
            </div>
        
            <nav>
                <Link to="/projects">&lt; projects &gt;</Link>
                <Link to="/games">&lt; games &gt;</Link>
                <Link to="/contact">&lt; contact &gt;</Link>
            </nav>

            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />        
      </div>
    </Router>
  );
} 

const Footer = () => (
  <footer>
    <a href="https://www.linkedin.com/in/vanessa-m-110b7b226/" target="_blank" rel="noreferrer"><img className="linkedin" src="./LinkedIn.png" alt="LinkedIn Logo" /></a>
    <a href="https://github.com/vmmaher" target="_blank" rel="noreferrer"><svg className="github" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" alt="GitHub Logo"><path fillRule="evenodd" clipRule="evenodd" d="M22.5 0C10.0687 0 0 10.3234 0 23.0691C0 33.2772 6.44062 41.8993 15.3844 44.9559C16.5094 45.1578 16.9312 44.4657 16.9312 43.8601C16.9312 43.3123 16.9031 41.4956 16.9031 39.5635C11.25 40.6305 9.7875 38.1505 9.3375 36.8529C9.08437 36.1897 7.9875 34.1423 7.03125 33.5944C6.24375 33.1618 5.11875 32.0949 7.00313 32.0661C8.775 32.0372 10.0406 33.7386 10.4625 34.4306C12.4875 37.9198 15.7219 36.9394 17.0156 36.3339C17.2125 34.8344 17.8031 33.8251 18.45 33.2484C13.4437 32.6716 8.2125 30.6819 8.2125 21.858C8.2125 19.3492 9.08438 17.273 10.5188 15.6582C10.2938 15.0814 9.50625 12.7168 10.7437 9.54484C10.7437 9.54484 12.6281 8.93928 16.9312 11.9094C18.7312 11.3904 20.6438 11.1308 22.5563 11.1308C24.4688 11.1308 26.3813 11.3904 28.1813 11.9094C32.4844 8.91044 34.3688 9.54484 34.3688 9.54484C35.6063 12.7168 34.8188 15.0814 34.5938 15.6582C36.0281 17.273 36.9 19.3204 36.9 21.858C36.9 30.7108 31.6406 32.6716 26.6344 33.2484C27.45 33.9693 28.1531 35.3534 28.1531 37.5161C28.1531 40.6016 28.125 43.0816 28.125 43.8601C28.125 44.4657 28.5469 45.1866 29.6719 44.9559C38.5594 41.8993 45 33.2484 45 23.0691C45 10.3234 34.9313 0 22.5 0Z" fill="#A74426"/></svg></a>
  </footer>
)

const Home = () => (
  <div>
    <div className="mainbox">
      <div className="profilebox">
        <img src="./VanessaMaherHeadshot.jpg" alt=""/>
      </div>

      <div className="textbox">
        <h2 className="quote"><span className="italicspan">You don't learn to walk by following rules. You learn by doing, and by falling over."</span><br />
          — Richard Branson
        </h2>
      <hr />
      <h2 className="welcome">Welcome to my World!</h2>
      <p>Welcome to my portfolio! My name is Vanessa, and I'm currently a Software Development student at Keyin College. I'm an aspiring front-end developer who loves to get creative. This website showcases some of my projects as well as has some fun games to play and a contact form. Thanks for visiting!</p>
      </div>
    </div>

    
  </div>
);

export default App;
