import { Component, Listen, Prop } from '@stencil/core';


@Component({
  tag: 'tic-tac',
  styleUrl: 'tictac.scss'
})
export class Tictac {

  @Prop({ mutable: true }) field: Array<number>;
  @Prop({ mutable: true} ) player: number;

  constructor() {
    this.field = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ];

    this.player = 1;
  }

  @Listen('cellClicked')
  handleClick( event ) {
    console.log("Player: " + this.player );
    const index: number = event.detail;
    this.field[index] = this.player;
    this.field = [ ...this.field ];

    const winner: number = getWinningPlayer(this.field);
    if (winner != 0) {
      alert('Winner: ' + winner);
    }
    this.player = 3- this.player;
  }

  render() {
    return (
      <div class="container">
        <div id="activePlayer">
          Player {this.player}
        </div>
        <div id="field">
          {this.field.map((e, index) => ( <field-cell value={e} index={index}></field-cell> ) )}
        </div>
      </div>
      
    );
  }
}

const winningPositions = 
[
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]
];

const getWinningPlayer = function(field): number {
  let winner: number = 0;
  winningPositions.forEach( row => {
    if (field[row[0]] != 0) {
      if (field[row[0]] == field[row[1]] && field[row[1]] == field[row[2]]) {
        winner = field[row[0]];
      }
    }
  });
  return winner;
}
