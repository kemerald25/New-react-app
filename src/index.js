import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import React from 'react';


// Use pascal case instad of carmel case for naming react functions
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'


function App() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>

  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
