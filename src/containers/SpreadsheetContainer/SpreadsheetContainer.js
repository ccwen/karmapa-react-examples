import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Spreadsheet from './../../components/Spreadsheet/Spreadsheet';
import {setData} from './../../reducers/spreadsheet';

class SpreadsheetContainer extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired
  };

  handleInputChange = (x, y, event) => this.props.setData(x, y, event.target.value);

  render() {
    const {width, height, data} = this.props;
    return <Spreadsheet width={width} height={height} data={data} onInputChange={this.handleInputChange} />;
  }
}

export default connect((state) => ({
  data: state.spreadsheet.data
}), {setData})(SpreadsheetContainer);
