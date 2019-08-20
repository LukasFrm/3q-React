import React, { Component } from 'react'

class MainFive extends Component {


  render() {
    var {stageFive, stageSix} = this.props
    
    return (
        
        <main
        className={
          "main main--5 " +
          (stageFive ? "alert-shown" : "alert-hidden") +
          (stageSix ? " checked" : "")
        }
      >
        <ol className="steps-wrap">
          <li className="step step--current" />
          <li className="step step--current" />
          <li className="step step--current" />
        </ol>
        <div className="card">
          <div
            className="spinner"
            style={{ display: stageSix ? "none" : "block" }}
          />
          <img
            className="main__icon icon icon-check"
            src="https://firstpushbucket.s3.eu-west-3.amazonaws.com/Amazon+Master+Lander/check-circle-regular.png"
          />
        </div>
      </main>
    )
  }
}

export default MainFive
