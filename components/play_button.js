import React, { Component } from "react"

class PlayButton extends Component {
  buttonClasses = () =>
    this.props.playing
      ? "play-button btn btn-danger"
      : "play-button btn btn-primary"

  buttonText = () => (this.props.playing ? "Stop" : "Start")

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
}

export default PlayButton
