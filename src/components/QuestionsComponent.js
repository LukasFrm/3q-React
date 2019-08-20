import React, { Component } from "react";

class QuestionsComponent extends Component {
  constructor() {
    super();

    this.state = {
      answerKeys: ["a", "b", "c"]
    };
  }

  render() {
    var questions = this.props.dataReceived.landerText.questions;
    var questionsIndex = Object.keys(questions);

    if (this.props.isFetched) {
      return questionsIndex.map(key => (
        <div key={key.toString()}>
          <div
            className={`question question--${Number(key) + Number(1)} ${
              this.props.currentKey == key ? "alert-shown" : "alert-hidden"
            }`}
          >
            <h2 className="subtitle">{questions[key].question}</h2>
            <div className="question__answers">
              {Object.keys(
                this.props.dataReceived.landerText.questions[key].answers
              ).map(item => (
                <div key={item}>
                  <input
                    type="radio"
                    id={"question" + key + 1 + this.state.answerKeys[item]}
                    name={"question" + key + 1}
                  />
                  <label
                    for={"question" + key + 1 + this.state.answerKeys[item]}
                    onClick={this.props.ChangeCurrentKey}
                  >
                    <span>{questions[key].answers[item].answer}</span>
                  </label>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      ));
    }
  }
}

export default QuestionsComponent;
