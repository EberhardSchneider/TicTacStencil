import { Component, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'field-cell',
  styleUrl: 'cell.scss'
})
export class Cell {

  @Event() cellClicked: EventEmitter;

  @Prop() value :number;
  @Prop() index :number;

  @Listen('click')
  handleClick() {
    this.cellClicked.emit( this.index );
  }

  render() {
    let symbol :string = '';
    switch (this.value) {
      case 1: symbol = '×';
              break;
      case 2: symbol = '○';
              break;
      default: symbol = ' ';
    }

    return (
      <div class="cell">
        { symbol }
      </div>
    );
  }
}
