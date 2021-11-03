import React from "react";
import { connect } from "react-redux";

class MeatDept extends Component {
  render() {
    return (
      <div>
        <h1>Meat dept</h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    meatData: state.meat,
  };
}

export default connect(mapStateToProps)(MeatDept);
