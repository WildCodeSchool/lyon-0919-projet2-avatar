import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BUBLES } from '../shared/bubles-mock';
import { Buble } from '../shared/buble';

@Component({
  selector: 'app-bubles',
  templateUrl: './bubles.component.html',
  styleUrls: ['./bubles.component.css']
})
export class BublesComponent implements OnInit {

  bubles : Buble[] = BUBLES;
  message: string;
  messageBuble: string;

  @Output() bublesEvent = new EventEmitter<Buble>()

  @Output()messageBubleText = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onBubleClick(buble: Buble) {
    this.bublesEvent.emit(buble);
  }

 sendMessage(){
   this.messageBubleText.emit(this.messageBuble)
 }

}
