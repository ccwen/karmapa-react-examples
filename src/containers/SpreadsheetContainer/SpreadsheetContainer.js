import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Spreadsheet from './../../components/Spreadsheet/Spreadsheet';
import {setData, setWidth, setHeight, setDisplayWidth, setDisplayHeight} from './../../reducers/spreadsheet';

class SpreadsheetContainer extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    displayWidth: PropTypes.string.isRequired,
    displayHeight: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    setWidth: PropTypes.func.isRequired,
    setHeight: PropTypes.func.isRequired,
    setDisplayWidth: PropTypes.func.isRequired,
    setDisplayHeight: PropTypes.func.isRequired
  };

  handleInputChange = (x, y, event) => this.props.setData(x, y, event.target.value);

  handleWidthInputChange = (event) => {
    this.props.setDisplayWidth(event.target.value);
  };

  handleHeightInputChange = (event) => {
    this.props.setDisplayHeight(event.target.value);
  };

  handleSubmitButtonClick = () => {
    const {setWidth, setHeight, displayWidth, displayHeight} = this.props;

    if (isNaN(parseInt(displayWidth, 10)) || isNaN(parseInt(displayHeight, 10))) {
      return alert('displayWidth or displayHeight should be numeric');
    }
    if ((displayWidth > 20) || (displayHeight > 20)) {
      return alert('displayWidth or displayHeight should not be greater than 20')
    }
    if ((displayWidth < 1) || (displayHeight < 1)) {
      return alert('displayWidth or displayHeight should be greater than 0')
    }
    setWidth(parseInt(displayWidth, 10));
    setHeight(parseInt(displayHeight, 10));
  };

  render() {
    const {width, height, data, displayWidth, displayHeight} = this.props;
    const props = {
      width,
      height,
      displayWidth,
      displayHeight,
      data,
      onInputChange: this.handleInputChange,
      onWidthInputChange: this.handleWidthInputChange,
      onHeightInputChange: this.handleHeightInputChange,
      onSubmitButtonClick: this.handleSubmitButtonClick
    };
    return <Spreadsheet {...props} />;
  }
}

export default connect((state) => ({
  data: state.spreadsheet.data,
  width: state.spreadsheet.width,
  height: state.spreadsheet.height,
  displayWidth: state.spreadsheet.displayWidth,
  displayHeight: state.spreadsheet.displayHeight
}), {setData, setWidth, setHeight, setDisplayWidth, setDisplayHeight})(SpreadsheetContainer);
