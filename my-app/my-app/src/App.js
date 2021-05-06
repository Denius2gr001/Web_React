import logo from './logo.svg';
import './App.css';
import './style.css';
import './signin.css';

import './hamburgers.css';
// import 'https://kit.fontawesome.com/f2b7a817d1.js';
// import './scripts/jquery-3.5.1.min.js';
// import './scripts/slick-1.8.1/slick/slick.min.js';
// import './scripts/script.js';
import './signin.js';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign" component={SignIn} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
