import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hairiness } from '../shared/hairiness';
import { HAIRINESS } from '../shared/hairiness-mock';

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

  onHairinessClicked(hairiness: Hairiness) {
    this.hairinessEvent.emit(hairiness);
  }

}
