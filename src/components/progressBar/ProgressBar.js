import React, { Component } from "react";
import "./ProgressBar.css";

class ProgressBar extends Component {
  render() {
    const { percentage } = this.props;

    return (
      <div className="ProgressBar">
        <div className="ProgressBarColored" style={{ width: `${percentage}%` }}>
          {`${percentage.toFixed(2)}%`}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
