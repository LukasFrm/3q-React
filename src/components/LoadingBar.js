import React, { Component } from 'react'

class LoadingBar extends Component {
  render() {
    return (
      <div>
                <div
          className="loadingBar"
          style={{
            width: "100%",
            height: "100%",
            paddingBottom: "75%",
            position: "relative"
          }}
        >
          <img src="https://media.giphy.com/media/hBBXSfblmnvOw/giphy.gif" />
        </div>
      </div>
    )
  }
}

export default LoadingBar
