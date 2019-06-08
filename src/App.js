import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './compoments/Posts';
import PostForm from './compoments/PostForm';
import configureStore from './configure_store';

class App extends Component{
// function App() {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className='App-title'> welcome</h1>
          </header>
          <PostForm />
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
