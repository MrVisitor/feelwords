import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

import data from './levels.data';

export default class Playground extends React.PureComponent {

  static propTypes = {
    currentLevel: PropTypes.number.isRequired,
    success: PropTypes.func.isRequired,
  }

  static defaultProps = {
    currentLevel: 1,
    success: () => {}
  }

  static maxLevel = data.length - 1;

  isSelectionProcess = false

  state = {
    selected: [],
    guessed: [],
    nextColor: Konva.Util.getRandomColor(),
  }

  get data() {
    return data[this.props.currentLevel - 1 || 0][0]
  }

  /**
   * @returns {Array<Object>}
   */
  get words() {
    return this.data.words
  }

  /**
   * @returns {Array<Object>}
   */
  get matrix() {
    return this.data.matrix
  }

  /**
   * @returns {Number}
   */
  get width() {
    if (window.innerWidth > window.innerHeight) return this.height
    return window.innerWidth > 500 ? 500 : window.innerWidth
  }

  /**
   * @returns {Number}
   */
  get height() {
    if (window.innerHeight > window.innerWidth) return this.width
    return window.innerHeight > 500 ? 500 : window.innerHeight
  }

  /**
   * @returns {Number}
   */
  get size() {
    const size = this.width > this.height ? this.height : this.width
    return size / this.matrix.length
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, { passive: true });
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentLevel !== this.props.currentLevel) {
      this.setState({ selected: [], guessed: [] })
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, { passive: true });
  }

  onResize = () => this.forceUpdate()

  /**
   * @param {Number} x
   * @param {Number} y
   */
  findItem = (x, y) => {
    const indexX = x/this.size
    const indexY = y/this.size
    const row = this.matrix[indexY]
    const item = row[indexX]

    if (this.state.selected.findIndex(el => el.key === item.key) == -1) {
      this.setState({
        selected: [...this.state.selected, item]
      })
    }
  }

  progressCheck = () => {
    if (this.state.guessed.length === this.words.length) {
      this.props.success()
    }
  }

  runValidator = () => {
    const stack = this.state.selected.map(item => item.key).join('_')
    const index = this.words.findIndex(item => item.stack === stack)

    if (index > -1) return this.setState({
      guessed: [...this.state.guessed, { stack, color: this.state.nextColor }],
      nextColor: Konva.Util.getRandomColor(),
      selected: []
    }, this.progressCheck)

    this.setState({ selected: [] })
  }

  onStart = ({ target: { attrs } }) => {
    this.isSelectionProcess = true
  }

  onMove = ({ target: { attrs } }) => {
    if (this.isSelectionProcess) {
      if (attrs.x !== undefined &&  attrs.y !== undefined) {
        this.findItem(attrs.x, attrs.y)
      } else {
        this.onEnd()
      }
    }
  }

  onEnd = () => {
    if (this.isSelectionProcess) {
      this.isSelectionProcess = false
      this.runValidator()
    }
  }

  /**
   * @param {Object} props
   * @param {Number} props.index
   * @param {Object} props.item
   */
  renderLetter = (index, props) => (
    <Text
      key={props.key}
      x={this.size * props.index}
      y={this.size * index}
      text={props.item.letter}
      width={this.size}
      height={this.size}
      wrap="char"
      align="center"
      lineHeight={2}
      fill="white"
      fontSize={this.size / 2}
    />
  )

  /**
   * @param {Object} props
   * @param {Number} props.index
   * @param {Object} props.item
   * @param {String} props.item.key
   * @param {String} props.item.letter
   */
  renderSquare = (index, props) => {
    const fill = (function() {
      let guessedIndex = this.state.guessed.findIndex(item => item.stack.indexOf(props.item.key) > -1)

      if (guessedIndex > -1) {
        return this.state.guessed[guessedIndex].color
      }

      if (this.state.selected.findIndex(item => item.key === props.item.key) > -1) {
        return this.state.nextColor
      }

      return '#cccccc'
    }.bind(this))()

    return (
      <Rect
        key={props.key}
        text="12"
        x={this.size * props.index}
        y={this.size * index}
        width={this.size}
        height={this.size}
        fill={fill}
        stroke="#000"
        strokeWidth={0.5}
        onClick={this.handleClick}
        onTouchMove={this.onTouchMove}
      />
    )
  }

  /**
   * @param {Array} row
   * @param {Number} index
   */
  renderRow = (row, index) => [
    row.map((...args) => this.renderSquare(index, {
      index: args[1],
      item: args[0]
    })),
    row.map((...args) => this.renderLetter(index, {
      index: args[1],
      item: args[0]
    }))
  ]

  render = () => (
    <Stage
      width={this.width}
      height={this.height}
      onTouchStart={this.onStart}
      onTouchMove={this.onMove}
      onTouchEnd={this.onEnd}
      onMouseLeave={this.onEnd}
    >
      <Layer
        onMouseDown={this.onStart}
        onMouseMove={this.onMove}
        onMouseUp={this.onEnd}
      >
        { this.matrix.map(this.renderRow) }
      </Layer>
    </Stage>
  )

}
