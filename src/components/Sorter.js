import React, { Component } from "react";
import LoadingBar from "./LoadingBar";
import MainWindow from "./MainWindow";
import ErrorPage from "./ErrorPage";

export class Sorter extends Component {
  constructor() {
    super();

    this.state = {
      isFetched: false,
      dataReceived: null,
      stageOne: true,
      stageTwo: false,
      stageThree: false,
      stageFour: false,
      stageFive: false,
      stageSix: false,
      currentKey: 0
    };
  }
  componentDidMount() {
    var template = this.props.match.params.id;
    console.log(template);
    let myData;
    fetch("http://95.217.34.225/randomlander/get/" + template)
      .then(res => res.json())
      .then(json => {
        myData = json;
        this.setState({
          isFetched: true,
          dataReceived: json,
          renderedTemplate: json.template.name
        });
        console.log(this.state.renderedTemplate);
      });
  }

  render() {
    var { renderedTemplate, isFetched, dataReceived } = this.state;

    if (!isFetched) {
      return <LoadingBar />;
    } else
      return (
        <div>
          {() => {
            // if (!renderedTemplate) {
            //   return <ErrorPage />;
            // }
            console.warn(renderedTemplate)
          }}
          {(() => {
            switch (renderedTemplate) {
              case "3question":
                return (
                  <MainWindow
                    isFetched={isFetched}
                    dataReceived={dataReceived}
                  />
                );
              case undefined:
                return <ErrorPage />;
              default:
                return (
                  <div>
                    <ErrorPage />
                  </div>
                );
            }
          })()}
        </div>
      );
  }
}
export default Sorter;
