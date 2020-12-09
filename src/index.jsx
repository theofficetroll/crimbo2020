import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ImageSwap from './components/puzzles/imageswap.jsx'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: 'cafeteria',
      keys: {
        medbay: 0,
        navigation: 0,
        security: 0,
        shields: 0,
        weapons: 0,
      },
      inventory: {
      },
    }
    // binds and any initial method calls
  }

  changeRoom(newRoom) {
    // get
  }

  render() {
    return (
      <div className="main-container">
        {/* <Room room={this.state.room}/> */}
        {/* <Exits room={this.state.room} keys={this.state.keys} /> */}
        {/* <Inventory inventory={this.state.inventory} /> */}
        {<ImageSwap />}
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('Main'));
