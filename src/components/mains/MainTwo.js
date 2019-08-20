import React, { Component } from "react";

class MainTwo extends Component {
  render() {
    var { stageTwo, dataReceived } = this.props;
    var text = dataReceived.landerText;

    return (
      <main
        className={
          "main main--2 " + (stageTwo ? "alert-shown" : "alert-hidden")
        }
      >
        <div className="card">
          <div className="spinner" />
          <img
            className="main__icon icon icon-check"
            src="3question/Seguimiento y ubicación_files/check-circle-regular.png"
          />
          <ul className="loading-list">
            <li>{text.surveyHeaderText}</li>
            <li>{text.surveyH4Text}</li>
            <li>{text.websiteP1Text}</li>
          </ul>
        </div>
      </main>
    );
  }
}

export default MainTwo;
