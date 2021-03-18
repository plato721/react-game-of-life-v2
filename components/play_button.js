import React, { Component } from "react"

class PlayButton extends Component {
  render() {
    return (
      <button
        className={this.buttonClasses()}
        onClick={this.props.clickHandler}
      >
        {this.buttonText()}
      </button>
    )
  }

  buttonClasses() {
    if (this.props.playing) {
      return "play-button btn btn-danger"
    } else {
      return "play-button btn btn-primary"
    }
  }

  buttonText() {
    if (this.props.playing) {
      return "Stop"
    } else {
      return "Start"
    }
  }
}

export default PlayButton
