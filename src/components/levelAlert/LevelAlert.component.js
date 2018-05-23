import React from 'react';
import PropTypes from 'prop-types';

import './LavelAlert.component.css';

export default class LavelAlert extends React.PureComponent {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    isMaxLevel: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    visible: false,
    isMaxLevel: false,
    onClick: () => {}
  }

  get title() {
    return this.props.isMaxLevel ? 'Поздравляю тебя, игра пройдена!' : 'Так держать, уровень успешно пройден!'
  }

  get buttonLabel() {
    return this.props.isMaxLevel ? 'Начать заново' : 'Далее'
  }

  fadeOut(el) {
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  fadeIn(el) {
    el.style.opacity = 0;
    el.style.display = "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible) {
      return this.props.visible ? this.fadeIn(this.refs.container) : this.fadeOut(this.refs.container)
    }
  }
  

	render = () => (
		<div ref="container" className="alert_container visible">
      <div className="alert_content">
        <div className="alert_title">{ this.title }</div>
        <button className="alert_button" onClick={this.props.onClick}>{ this.buttonLabel }</button>
      </div>
		</div>
	)

}