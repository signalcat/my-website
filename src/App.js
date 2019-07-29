import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch} from 'react-router-dom';
import HomePage from '../src/containers/HomePage/HomePage';
import Gallery from './containers/Photography/Gallery';
import Experience from './containers/Experience/Experience';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Experience" component={Experience}></Route>
        </Switch>
      </Layout>
    </div> 
  );
}

export default App;
