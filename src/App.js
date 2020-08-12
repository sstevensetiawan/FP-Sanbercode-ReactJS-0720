import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import Movie from './Movie/Movie';

function App() {
  return (
    <div>
      <Header/>
      <Movie />
      <Footer/>
    </div>
  );
}

export default App;
