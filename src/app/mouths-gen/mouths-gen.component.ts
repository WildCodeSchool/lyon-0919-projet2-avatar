import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mouth } from '../shared/mouths';
import { MOUTHS } from '../shared/mouths-mock';


@Component({
  selector: 'app-mouths-gen',
  templateUrl: './mouths-gen.component.html',
  styleUrls: ['./mouths-gen.component.css']
})
export class MouthsGenComponent implements OnInit {

  mouths: Mouth[] = MOUTHS;

  @Output() mouthEvent = new EventEmitter<Mouth>();

  constructor() { }

  ngOnInit() {
  }

  onMouthClicked(m: Mouth){
    this.mouthEvent.emit(m);
  }

}
