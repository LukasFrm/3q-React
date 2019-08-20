import React, { Component } from "react";

class MainThree extends Component {
  render() {
    var { stageThree, SecondBtnClick, dataReceived } = this.props;
    var text = dataReceived.landerText;
    var offer = dataReceived.offerwallItems[0].offer.item;

    return (
      <main
        className={
          "main main--3 " + (stageThree ? "alert-shown" : "alert-hidden")
        }
      >
        <ol className="steps-wrap">
          <li className="step step--current" />
          <li className="step" />
          <li className="step" />
        </ol>
        <div className="card">
          <div className="product">
            <img src={offer.pictureUrl} alt="" style={{ maxWidth: "30%" }} />
            <div className="product__content">
              <h3 className="subtitle">{text.websiteP2Text}:</h3>
              <dl className="product__info">
                <dt>{text.questionsHeaderText}:</dt>
                <dd>{text.checkingProductText}</dd>
              </dl>
              <dl className="product__info">
                <dt>{text.submittingText}:</dt>
                <dd>{text.orderQuantityLeftText}</dd>
              </dl>
              <dl className="product__info">
                <dt>{text.completedSurveyH4Text}:</dt>
                <dd>{offer.name}</dd>
              </dl>
              <dl className="product__info">
                <dt>{text.completedSurveyP1Text}:</dt>
                <dd>
                  {dataReceived.locale.currencyTag}
                  {
                    dataReceived.offerwallItems[0].offer
                      .shippingPrice
                  }
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn screen-trigger--2"
          onClick={SecondBtnClick}
        >
          {text.completedSurveyP2Text}
        </button>
      </main>
    );
  }
}

export default MainThree;
