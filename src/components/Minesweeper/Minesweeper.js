import React, { Component, PropTypes } from 'react';

import './Minesweeper.css';
import MinesweeperCell from './../MinesweeperCell/MinesweeperCell';
import genArr from './../../helpers/genArr';

export default class Minesweeper extends Component {

  static propTypes = {
    face: PropTypes.string.isRequired,
    flagCount: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    minesCount: PropTypes.number.isRequired,
    onCellClick: PropTypes.func.isRequired,
    onCellRender: PropTypes.func.isRequired,
    onCellRightClick: PropTypes.func.isRequired,
    onFaceClick: PropTypes.func.isRequired,
    timeInSec: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  renderCells = () => {
    const {width, height, onCellClick, onCellRightClick, onCellRender} = this.props;
    return genArr(height).map((elem, y) => {
      const cells = genArr(width).map((elem, x) => {
        const key = `cell-${x}-${y}`;
        const props = {
          key,
          ref: (cell) => onCellRender.call(null, x, y, cell),
          onClick: onCellClick.bind(this, x, y),
          onContextMenu: onCellRightClick.bind(this, x, y)
        };
        return <MinesweeperCell {...props} />;
      });
      return <tr key={'row-' + y}>{cells}</tr>;
    });
  };

  getCell = (x, y) => this.cells[`${x}:${y}`];

  render() {

    const {flagCount, face, timeInSec, onFaceClick} = this.props;

    return (
      <div id="minesweeper" className="minesweeper">
        <div className="score-board">
          <span className="flag-pad">{flagCount}</span>
          <span className="face-pad" onClick={onFaceClick}>{face}</span>
          <span className="time-pad">{timeInSec}</span>
        </div>
        <table className="scoreboard">
          <tbody>{this.renderCells()}</tbody>
        </table>
      </div>
    )
  }
}
