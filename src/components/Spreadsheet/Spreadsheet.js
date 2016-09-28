import React, {Component, PropTypes} from 'react';
import './Spreadsheet.css';
import genArr from './../../helpers/genArr';

class Spreadsheet extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired
  };

  render() {
    const {width, height, data, onInputChange} = this.props;

    const cells = genArr(height).map((elem, y) => {
      const cols = genArr(width).map((elem, x) => (
        <td key={`cell-${x}-${y}`}>
          <input type="text" value={data[x + ':' + y]} onChange={onInputChange.bind(null, x, y)} />
        </td>
      ));
      return <tr key={`row-${y}`}>{cols}</tr>;
    });

    return (
      <table className="spreadsheet">
        <tbody>{cells}</tbody>
      </table>
    );
  }
}

export default Spreadsheet;
