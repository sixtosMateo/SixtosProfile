import React, { Component } from 'react';
import './App.css';
import FilterCanvas from './components/FilterCanvas'
import SkillList from './components/SkillList'
import FilterList from './components/FilterList'



class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Mateo Sixtos</h1>
        </header>
        <FilterCanvas/>
        <SkillList/>
        <FilterList/>

      </div>
    );
  }
}

export default App;
