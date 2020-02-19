import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNumber, reduceNumber} from "./counterActions";

class counterElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 2,
    };
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  onChangeNumber(event) {
    this.setState({
      number: event.target.value,
    });
  }

  render() {
    const {count, addNumber, reduceNumber} = this.props;
    const {number} = this.state;
    return (
      <div>
        <p>
          the current result is:&nbsp;&nbsp;
          {count}
        </p>
        <input type="text" value={number} onChange={this.onChangeNumber} />
        <input
          type="button"
          onClick={() => {
            addNumber(number);
          }}
          value="+"
        />
        <input
          type="button"
          onClick={() => {
            reduceNumber(number);
          }}
          value="-"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addNumber, reduceNumber}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(counterElement);