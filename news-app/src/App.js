//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  pageSize=20;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress= (progress)=>{
    this.setState({progress: progress});
  }
  render() {

    return (
      <div>
          <BrowserRouter>
            <Navbar/>
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
             
            />
            <Routes>
                <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country='us' category='general' />} />
                <Route exact path="/about" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="about" pageSize={this.pageSize}  />} />
                <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="business" pageSize={this.pageSize} country='us' category='business' />} />
                <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="entertainment" pageSize={this.pageSize} country='us' category='entertainment' />} />
                <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country='us' category='general' />} />
                <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="health" pageSize={this.pageSize} country='us' category='health' />} />
                <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="sports" pageSize={this.pageSize} country='us' category='sports' />} />
                <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="science" pageSize={this.pageSize} country='us' category='science' />} />
                <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="technology" pageSize={this.pageSize} country='us' category='technology' />} />
                
            </Routes>

          </BrowserRouter>
      </div>
    )
  }
}

