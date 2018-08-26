import React from 'react';
import Square from './Square_comp';

  export default class Board extends React.Component {
    setRed(winnerSquers){
      console.log(winnerSquers);
      for(let i =0; i< 3; i++)
        this.props.squares[winnerSquers[i]].classname = 'red'; 
    }
    render() {
        
        const squares = this.props.squares;
        const onClick = this.props.onClick;
        return (
          <div>
            <div className="board-row">
              {squares.slice(0, 3).map((square, k) => <Square id={k} key={k} classname={square.className} value={square} onClick={() => onClick((k))} />)}
            </div>
            <div className="board-row">
              {squares.slice(3, 6).map((square, k) => <Square  id={k+3} key={k+3} classname={square.className} value={square} onClick={() => onClick((k+3))} />)}
            </div>
            <div className="board-row">
              {squares.slice(6, 9).map((square, k) => <Square  id={k+6} key={k+6} classname={square.className} value={square} onClick={() => onClick((k+6))} />)}
            </div>
          </div>
        );
    }
  }