import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Eyes } from '../shared/eyes';
import { EYES } from '../shared/eyes-mock';

@Component({
  selector: 'app-eyes-gen',
  templateUrl: './eyes-gen.component.html',
  styleUrls: ['./eyes-gen.component.css']
})
export class EyesGenComponent implements OnInit {

  eyesList: Eyes[] = EYES;
  @Output() eyesEvent = new EventEmitter<Eyes>();

  constructor() { }

  ngOnInit() {
  }

  onEyesClicked(eyes: Eyes){
    this.eyesEvent.emit(eyes);
  }

}
