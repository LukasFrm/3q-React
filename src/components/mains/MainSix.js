import React, { Component } from 'react'

class MainSix extends Component {
  render() {

    var { stageSeven, dataReceived } = this.props;
    var text = dataReceived.landerText;
    var offer = dataReceived.offerwallItems[0].offer;


    return (
        <main
        className={`main main--6 ${
          stageSeven ? "alert-shown" : "alert-hidden"
        }`}
      >
        <ol className="steps-wrap">
          <li className="step step--current" />
          <li className="step step--current" />
          <li className="step step--current" />
        </ol>
        <div className="card">
          <h2 className="title title--primary">
            {text.leaveCommentText} #21410
          </h2>
          <img
            src={
              offer.item
                .pictureUrl
            }
            alt=""
            className="spaced1"
            style={{ maxWidth: "30%" }}
          />
          <h3 className="subtitle">
            {text.commentButtonText}: <br />
            {text.thankYouText}{" "}
            {text.orderQuantityLeftText}
          </h3>
          <p>{text.antiSpamText}</p>
        </div>
        <a
          href={
            offer.offerUrl.url +
            1
          }
          target="blank_"
          className="btn"
        //   style={{ backgroundColor: "red" }}
        >
          {text.ClickOkText}
        </a>
      </main>
    )
  }
}

export default MainSix
