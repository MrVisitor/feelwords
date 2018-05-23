import React from 'react';

import './App.component.css';

import Playground from '../playground/Playground.component'
import LevelAlert from '../levelAlert/LevelAlert.component'

import data from '../playground/levels.data';

class App extends React.Component {

  container = null

  state = {
    currentLevel: 1,
    alertVisible: false
  }

  get isMaxLevel() {
    return this.state.currentLevel === data.length;
  }

  levelUp = () => this.setState(state => ({
    ...state,
    alertVisible: false,
    currentLevel: this.isMaxLevel ? 1 : ++state.currentLevel
  }))

  render = () => (
    <div
      ref="container"
      className="wrapper"
    >
      <Playground
        currentLevel={this.state.currentLevel}
        success={() => this.setState({ alertVisible: true })}
      />
      <LevelAlert
        isMaxLevel={this.isMaxLevel}
        visible={this.state.alertVisible}
        onClick={this.levelUp}
      />
    </div>
  )

}

export default App;
