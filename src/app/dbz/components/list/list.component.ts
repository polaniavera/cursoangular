import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: "Mr. Popo",
    power: 15
  },
  {
    name: "Trunks",
    power: 1500
  }];

  // onDelete(): void {

  // }

  onDeleteCharacter(id?: string): void {
    if(!id) {
      console.log('No ID');
      return;
    }
    console.log(id);
    this.onDelete.emit(id);
  }

}
