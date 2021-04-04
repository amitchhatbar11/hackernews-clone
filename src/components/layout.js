import React, { Component } from "react";
import Header from "./header";
import { withRouter } from "react-router-dom";

class Layout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Layout);
