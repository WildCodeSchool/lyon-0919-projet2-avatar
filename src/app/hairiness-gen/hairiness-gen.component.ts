import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hairiness } from '../shared/hairiness';
import { HAIRINESS, HAIRINESSBLOND, HAIRINESSCHESTNUT, HAIRINESSGINGER, HAIRINESSGREY } from '../shared/hairiness-mock';

@Component({
  selector: 'app-hairiness-gen',
  templateUrl: './hairiness-gen.component.html',
  styleUrls: ['./hairiness-gen.component.css']
})
export class HairinessGenComponent implements OnInit {

  hairinessList : Hairiness[] = HAIRINESS;

  @Output() hairinessEvent = new EventEmitter<Hairiness>();

  constructor() { }

  ngOnInit() {
  }

  onColorClickedBlack(){
    this.hairinessList = HAIRINESS;
  }

  onColorClickedBlond(){
    this.hairinessList = HAIRINESSBLOND;
  }

  onColorClickedChestnut(){
    this.hairinessList = HAIRINESSCHESTNUT;
  }

  onColorClickedGinger(){
    this.hairinessList = HAIRINESSGINGER;
  }

  onColorClickedGrey(){
    this.hairinessList = HAIRINESSGREY;
  }


  onHairinessClicked(hairiness: Hairiness) {
    this.hairinessEvent.emit(hairiness);
  }

}
