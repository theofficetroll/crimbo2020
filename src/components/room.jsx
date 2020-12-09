import React from 'react';
import './index.css';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: this.props.room,
    }
    this.getRoomDetails = this.getRoomDetails.bind(this);
    this.getRoomDetails();
  }
  getRoomDetails() {
    // fetch image and subcomponents from roomdata file
  }

  render() {
    return (
      <div>
        //
      </div>
    )
  }
}
