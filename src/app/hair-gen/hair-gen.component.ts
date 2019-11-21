import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hair } from '../shared/hair';
import { HAIR, HAIRBLOND, HAIRCHESTNUT, HAIRGINGER, HAIRGREY } from '../shared/hair-mock';

@Component({
  selector: 'app-hair-gen',
  templateUrl: './hair-gen.component.html',
  styleUrls: ['./hair-gen.component.css']
})
export class HairGenComponent implements OnInit {

  hairList: Hair[] = HAIR;
  @Output() hairEvent = new EventEmitter<Hair>();

  constructor() { }

  ngOnInit() {
  }

  onColorClickedBlack(){
    this.hairList = HAIR;
  }

  onColorClickedBlond(){
    this.hairList = HAIRBLOND;
  }

  onColorClickedChestnut(){
    this.hairList = HAIRCHESTNUT;
  }

  onColorClickedGinger(){
    this.hairList = HAIRGINGER;
  }

  onColorClickedGrey(){
    this.hairList = HAIRGREY;
  }

  onHairClicked(hair: Hair){
    this.hairEvent.emit(hair);
  }
}
