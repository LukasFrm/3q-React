import React, { Component } from 'react'
import QuestionsComponent from '../QuestionsComponent'

class MainFour extends Component {
  render() {
    var {stageFour, dataReceived, isFetched, currentKey, ChangeCurrentKey } = this.props
    var offer = dataReceived.offerwallItems[0].offer.item

    return (
        <main
        className={
          "main main--4 " +
          (stageFour ? "alert-shown" : "alert-hidden")
        }
      >
        <ol className="steps-wrap">
          <li className="step step step--done" />
          <li className="step step--current" />
          <li className="step" />
        </ol>
        <div className="card">
          <img
            src={
                offer
                .pictureUrl
            }
            alt=""
            style={{ maxWidth: "30%" }}
          />
          <form className="questions-wrap">
            <QuestionsComponent
              dataReceived={dataReceived}
              isFetched={isFetched}
              currentKey={currentKey}
              ChangeCurrentKey={ChangeCurrentKey}
            />
          </form>
        </div>
      </main>
    )
  }
}

export default MainFour
