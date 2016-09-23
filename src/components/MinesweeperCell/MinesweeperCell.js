import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import './MinesweeperCell.css';

export default class MinesweeperCell extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onContextMenu: PropTypes.func.isRequired
  };

  state = {
    number: '',
    isClicked: false,
    isFlagged: false,
    showMine: false
  };

  setClicked = (isClicked) => this.setState({isClicked});

  setNumber = (number) => this.setState({number});

  showMine = (showMine) => this.setState({showMine});

  isMine = () => this.state.isMine;

  isClicked = () => this.state.isClicked;

  setFlagged = (isFlagged) => this.setState({isFlagged});

  render() {
    const {onClick, onContextMenu} = this.props;
    const {isClicked, showMine, number, isFlagged} = this.state;

    const tdClass = classNames({
      'cell': true,
      'mine': showMine,
      'clicked': isClicked,
      'flagged': isFlagged,
      [`c${number}`]: true
    });
    return <td className={tdClass} onClick={onClick} onContextMenu={onContextMenu}>{number}</td>
  }
}
