import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {setFace} from './../../reducers/minesweeper';
import Minesweeper from './../../components/Minesweeper/Minesweeper';
import getRandomInt from './../../helpers/getRandomInt';
import genArr from './../../helpers/genArr';

const SCAN_COORDS = [
  {deltaX: -1, deltaY: -1},
  {deltaX: 0, deltaY: -1},
  {deltaX: 1, deltaY: -1},
  {deltaX: -1, deltaY: 0},
  {deltaX: 1, deltaY: 0},
  {deltaX: -1, deltaY: 1},
  {deltaX: 0, deltaY: 1},
  {deltaX: 1, deltaY: 1}
];

class MinesweeperContainer extends Component {

  static propTypes = {
    face: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    minesCount: PropTypes.number.isRequired,
    setFace: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
  };

  cells = {};
  isStarted = false;
  isDisabled = false;

  constructor(props) {
    super(props);
    const {minesCount} = this.props;
    this.state = {
      flagCount: minesCount,
      timeInSec: 0
    };
  }

  componentWillMount() {
    this.createCells();
    this.setRandomMines();
  }

  getCellKey = (x, y) => `${x}:${y}`;

  createCells = () => {
    const {width, height} = this.props;
    const cells = this.cells;
    genArr(height).forEach((elem, y) => {
      genArr(width).forEach((elem, x) => {
        const key = this.getCellKey(x, y);
        cells[key] = {
          x,
          y,
          isMine: false,
          isClicked: false,
          isFlagged: false,
          component: null
        };
      });
    });
  };

  setRandomMines = () => {
    const {minesCount, width, height} = this.props;
    const size = width * height;
    const cells = this.cells;
    const keys = Object.keys(cells);

    let count = minesCount;

    while (count > 0) {
      const index = getRandomInt(0, size - 1);
      const key = keys[index];
      if (! cells[key].isMine) {
        cells[key].isMine = true;
        count--;
      }
    }
  };

  setTime = (timeInSec) => this.setState({timeInSec});

  handleCellClick = (x, y, event) => {

    event.preventDefault();

    if (this.isDisabled) {
      return;
    }

    if (! this.isStarted) {
      this.timePadTimer = setInterval(() => {
        this.setTime(++this.state.timeInSec);
      }, 1000);
    }

    this.isStarted = true;

    const cell = this.getCell(x, y);

    if (cell.isMine) {
      this.showMines();
      this.lose();
      this.stopTimePad();
    }
    else {
      this.clearClickArea(x, y);
    }
    if (this.hasWinner()) {
      this.win();
      this.stopTimePad();
    }
  };

  stopTimePad = () => clearInterval(this.timePadTimer);

  showMines = () => {
    Object.keys(this.cells)
      .map(key => this.cells[key])
      .filter(cell => cell.isMine)
      .forEach(cell => {
        cell.component.showMine(true);
        this.markCellClicked(cell, true);
      });
  };

  getSurroundedCells = (targetX, targetY) => {
    return SCAN_COORDS.map((row) => {
      const x = targetX + row.deltaX;
      const y = targetY + row.deltaY;
      return this.getCell(x, y);
    })
    .filter((cell) => (!! cell));
  };

  getAreaMinesCount = (x, y) => {
    return this.getSurroundedCells(x, y)
      .filter((cell) => cell.isMine).length;
  };

  clearClickArea = (x, y) => {

    const areaMinesCount = this.getAreaMinesCount(x, y);
    const clickedCell = this.getCell(x, y);

    this.markCellClicked(clickedCell, true);
    clickedCell.component.setNumber(areaMinesCount || '');

    if (0 === areaMinesCount) {
      this.getSurroundedCells(x, y)
        .filter(cell => (! cell.isClicked))
        .forEach((cell) => {
          this.clearClickArea(cell.x, cell.y);
        });
    }
  };

  toggleFlag = (cell) => {
    cell.isFlagged = ! cell.isFlagged;
    cell.component.setFlagged(cell.isFlagged);
    this.setState(({flagCount}) => ({
      flagCount: cell.isFlagged ? (flagCount - 1) : (flagCount + 1)
    }));
  };

  handleCellRightClick = (x, y, event) => {
    event.preventDefault();

    if (this.isDisabled) {
      return;
    }

    const cell = this.getCell(x, y);

    if (cell.isClicked) {
      return;
    }
    this.toggleFlag(cell);
  };

  handleCellRender = (x, y, cell) => this.cells[`${x}:${y}`].component = cell;

  getCell = (x, y) => this.cells[`${x}:${y}`];

  markCellClicked =  (cell, isClicked) => {
    cell.isClicked = isClicked;
    cell.component.setClicked(isClicked);
  };

  lose = () => {
    this.props.setFace('x_x');
    this.isDisabled = true;
  };

  win = () => {
    this.props.setFace('*()*');
    this.isDisabled = true;
  };

  hasWinner = () => {
    const cells = this.cells;
    const notClickedCount = Object.keys(cells).filter((key) => (! cells[key].isClicked)).length;
    return notClickedCount === this.props.minesCount;
  };

  resetCell = (cell) => {

    const cellComponent = cell.component;

    cell.isMine = false;
    cell.isFlagged = false;
    cell.isClicked = false;

    cellComponent.setClicked(false);
    cellComponent.setFlagged(false);
    cellComponent.showMine(false);
    cellComponent.setNumber('');
  };

  reset = () => {
    const cells = this.cells;
    Object.keys(cells)
      .forEach((key) => this.resetCell(cells[key]));
    this.props.setFace('^_^');
    this.setRandomMines();
    this.stopTimePad();
    this.setTime(0);
    this.isStarted = false;
    this.isDisabled = false;
  };

  render() {

    const {width, height, minesCount, face} = this.props;
    const {flagCount, timeInSec} = this.state;
    const props = {width, height, minesCount, flagCount, face, timeInSec,
      onCellClick: this.handleCellClick, onCellRender: this.handleCellRender,
      onCellRightClick: this.handleCellRightClick, onFaceClick: this.reset};

    return <Minesweeper {...props} />;
  }
}

export default connect(state => ({
  face: state.minesweeper.face
}), {setFace})(MinesweeperContainer);
