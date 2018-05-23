import React from 'react';

import './App.component.css';

import Playground from '../playground/Playground.component'
import LevelAlert from '../levelAlert/LevelAlert.component'

import levelsData from '../playground/levels.data';

class App extends React.Component {

  container = null

  state = {
    currentLevel: 1,
    alertVisible: false,
    progress: 0
  }

  get isMaxLevel() {
    return this.state.currentLevel === levelsData.length;
  }

  /**
   * @returns {Array<Object>}
   */
  get data() {
    return levelsData[this.state.currentLevel - 1 || 0][0];
  }

   /**
   * @returns {Array<Object>}
   */
  get words() {
    return this.data.words;
  }

  /**
   * @returns {Array<Object>}
   */
  get matrix() {
    return this.data.matrix;
  }

  /**
   * @returns {String}
   */
  get progress() {
    return `${this.state.progress} of ${this.words.length}`
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
      <header className="app_header">
        <div className="app_header-text">Level: { this.state.currentLevel } of { levelsData.length }</div>
        <div className="app_header-text app_header-progress">{ this.progress }</div>
      </header>
      <Playground
        ref="playground"
        matrix={this.matrix}
        words={this.words}
        setProgress={progress => this.setState({ progress })}
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
