import React from "react";
import { queryUrl } from './config.js';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        queryResponse: ""
    };

    this.helloWorldQuery.bind(this);
  }

  componentDidMount() {
    this.helloWorldQuery();
  }

  async helloWorldQuery() {
    const resp = await fetch(queryUrl).catch((error)=>{
        console.log("Error: ", error)
      })
      console.log("resp: ",resp)
    if(resp) {
        console.log("resp: ",resp)
        let data = await resp.json().catch((error)=>{
          console.log("Error: ", error)
        })
        console.log("data: ",data)
        if(data) {
            this.setState({
              queryResponse: data
            });
        }
    }
  }

  render() {
    return(
      <div>
          Query Response: {this.state.queryResponse}
      </div>
    );
  }
}
export default HelloWorld;
