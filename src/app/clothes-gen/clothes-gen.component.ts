import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Clothes } from '../shared/clothes';
import { CLOTHE } from '../shared/clothes-mock'

@Component({
  selector: 'app-clothes-gen',
  templateUrl: './clothes-gen.component.html',
  styleUrls: ['./clothes-gen.component.css']
})
export class ClothesGenComponent implements OnInit {

  clothesList: Clothes[] = CLOTHE;
  @Output() clothesEvent = new EventEmitter<Clothes>();


  constructor() { }

  ngOnInit() {
  }

  onClothesClicked(clothes: Clothes){
    this.clothesEvent.emit(clothes);
  }

}
