import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Earrings } from '../shared/earrings';
import { EARRINGS, EARRINGSRED, EARRINGSGREEN } from '../shared/earrings-mock';

@Component({
  selector: 'app-earrings-gen',
  templateUrl: './earrings-gen.component.html',
  styleUrls: ['./earrings-gen.component.css']
})
export class EarringsGenComponent implements OnInit {

  earringsList : Earrings[] = EARRINGS;

  @Output() earringsEvent = new EventEmitter<Earrings>();

  constructor() { }

  ngOnInit() {
  }
  onColorClickedGreen(){
    this.earringsList = EARRINGSGREEN;
  }
  onColorClickedPurple(){
    this.earringsList = EARRINGS;
  }
  onColorClickedRed(){
    this.earringsList = EARRINGSRED;
  }

  onEarringsClicked(earrings: Earrings) {
    this.earringsEvent.emit(earrings);
  }


}
