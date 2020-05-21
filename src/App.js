import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Buttons from "./components/pages/Buttons";
import Containter from "./components/pages/Containter";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
         <NavTabs />
         <Route exact path="/" component={Home} />
         <Route exact path="/Home" component={Home} />
         <Route exact path="/Portfolio" component={Portfolio} />
         <Route exact path="/Contact" component={Contact} />
       </div>
     </Router>
      </header>
    </div>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

// function App() {
//   return (
//     <Router>
//       <div>
//         <NavTabs />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/blog" component={Blog} />
//         <Route path="/contact" component={Contact} />
//       </div>
//     </Router>
//   );
// }

// export default App;
