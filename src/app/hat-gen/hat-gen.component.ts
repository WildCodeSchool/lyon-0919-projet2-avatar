import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hat } from '../shared/hat';
import { HAT } from '../shared/hat-mock';

@Component({
  selector: 'app-hat-gen',
  templateUrl: './hat-gen.component.html',
  styleUrls: ['./hat-gen.component.css']
})
export class HatGenComponent implements OnInit {

  hats: Hat[] = HAT;

  @Output() hatEvent = new EventEmitter<Hat>();

  constructor() { }

  ngOnInit() {
  }

  onMouthClicked(h: Hat){
    this.hatEvent.emit(h);
  }

}
