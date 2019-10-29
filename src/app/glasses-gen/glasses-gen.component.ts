import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Glasses } from '../shared/glasses';
import { GLASSES } from '../shared/glasses-mock';

@Component({
  selector: 'app-glasses-gen',
  templateUrl: './glasses-gen.component.html',
  styleUrls: ['./glasses-gen.component.css']
})
export class GlassesGenComponent implements OnInit {
  glassesList: Glasses[] = GLASSES;
  @Output() glassesEvent = new EventEmitter<Glasses>();

  constructor() { }

  ngOnInit() {
  }

  onGlassesClicked(glasses: Glasses) {
    this.glassesEvent.emit(glasses);
  }

}
