import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Langgs from './pages/Langgs';
import About from './pages/About';
import Contact from './pages/Contact';
import Projectcards from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router basename='/BetsyPetering/'>
        <div>
          <NavTabs />
          <Route exact path='/' component={About} />
          <Route path='/portfolio' component={Projectcards} />
          <Route path='/langgs' component={Langgs} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
