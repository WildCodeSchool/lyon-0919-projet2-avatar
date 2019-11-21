import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Eyebrows } from '../shared/eyebrows';
import { EYEBROWS } from '../shared/eyebrows-mock';

@Component({
  selector: 'app-eyebrows-gen',
  templateUrl: './eyebrows-gen.component.html',
  styleUrls: ['./eyebrows-gen.component.css']
})
export class EyebrowsGenComponent implements OnInit {
  eyebrowsList : Eyebrows[] = EYEBROWS;

  @Output() eyebrowsEvent = new EventEmitter<Eyebrows>();
  
  constructor() { }

  ngOnInit() {
  }

  onEyebrowsClicked(eyebrows: Eyebrows) {
    this.eyebrowsEvent.emit(eyebrows);
  }

}
