import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hair } from '../shared/hair';
import { HAIR } from '../shared/hair-mock';

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

  onHairClicked(hair: Hair){
    this.hairEvent.emit(hair);
  }
}
