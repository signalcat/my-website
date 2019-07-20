import React from 'react';
import './App.css';
import catPic from './assets/images/cat.jpeg';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    // <div className="App">
    // <img src={catPic} alt="cat"></img>
    // <h1>This cat is so cute!</h1> 
    // </div>
    <div>
      <Layout>
      </Layout>
    </div> 
  );
}

export default App;
