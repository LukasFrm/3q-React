import React, { Component } from "react";

class MainOne extends Component {
  render() {
    var { stageOne, FirstBtnClick, dataReceived } = this.props;
    var text = dataReceived.landerText

    return (
      <div>
        <main
          className={
            "main main--1 " +
            (stageOne ? "alert-shown" : "alert-hidden")
          }
        >
          <div className="card">
            <h2 className="title">
              {text.popUpH3Text}
            </h2>
            <span className="badge" data-badge="!">
              <img
                src="https://firstpushbucket.s3.eu-west-3.amazonaws.com/Amazon+Master+Lander/icon-box.svg"
                alt=""
              />
            </span>
            <p>

              <br />
              {text.popUpP1Text}
            </p>
            <hr />
            <dl className="tracking-code">
              <dt> {text.popUpP2Text}:</dt>
              <dd style={{ color: "red" }}>Iph022QXw</dd>
            </dl>
          </div>
          <button
            type="button"
            className="btn screen-trigger--1"
            onClick={FirstBtnClick}
          >
            {text.popUpP3Text}
          </button>
        </main>
      </div>
    );
  }
}

export default MainOne;
