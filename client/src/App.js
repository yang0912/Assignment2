import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './compoments/Posts';
import PostForm from './compoments/PostForm';
import configureStore from './configure_store';

import Axios from 'axios';

class App extends Component{
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }
componentDidMount(){
  Axios.get('http://localhost:5000/messages').then(res => this.setState({messages: res.data})).catch(err => console.log(err));
}

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
          {this.state.messages.map(m => m.content)}
        </div>
      </Provider>
    );
  }
}

export default App;
