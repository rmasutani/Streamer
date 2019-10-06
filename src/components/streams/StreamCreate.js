import { connect } from "react-redux";
import React, { Component } from "react";
import { streamCreate } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.streamCreate(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { streamCreate }
)(StreamCreate);
