import React, { Component } from 'react';
import { render } from 'react-dom';

import '../resources/css/style.css';
import keenImage from '../resources/img/keen.png';

export default class App extends Component {
  render() {
    return (
      <div>
        Olá

        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
