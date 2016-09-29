import React, {Component, PropTypes} from 'react';
import './Spreadsheet.css';
import genArr from './../../helpers/genArr';
import classNames from 'classnames';

class Spreadsheet extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    displayWidth: PropTypes.string.isRequired,
    displayHeight: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onWidthInputChange: PropTypes.func.isRequired,
    onHeightInputChange: PropTypes.func.isRequired,
    onSubmitButtonClick: PropTypes.func.isRequired
  };

  render() {
    const {width, height, data, onInputChange, onWidthInputChange,
      onHeightInputChange, onSubmitButtonClick, displayWidth, displayHeight} = this.props;

    const cells = genArr(height).map((elem, y) => {
      const cols = genArr(width).map((elem, x) => (
        <td key={`cell-${x}-${y}`}>
          <input type="text" value={data[x + ':' + y] || ''} onChange={onInputChange.bind(null, x, y)} />
        </td>
      ));
      const trClass = classNames({
        even: 0 !== (y % 2)
      });
      return <tr className={trClass} key={`row-${y}`}>{cols}</tr>;
    });

    return (
      <div>
        <p>
          <span>width</span>
          <input type="text" onChange={onWidthInputChange} value={displayWidth} />
        </p>
        <p>
          <span>height</span>
          <input type="text" onChange={onHeightInputChange} value={displayHeight} />
        </p>
        <button onClick={onSubmitButtonClick}>submit</button>
        <table className="spreadsheet">
          <tbody>{cells}</tbody>
        </table>
      </div>
    );
  }
}

export default Spreadsheet;
