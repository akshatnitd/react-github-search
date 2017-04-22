import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../main.css');

export default class Main extends React.Component {

    constructor(props) {
      super(props);
    }

  render() {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
