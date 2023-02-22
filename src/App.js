import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import { Fragment } from 'react';
import Home from './components/home/home.component';


function App() {
  return (

    <Fragment>
      <Navigation />

      <Home />
    </Fragment>

  );
}

export default App;
