import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Clothes } from '../shared/clothes';
import { CLOTHES, CLOTHESGREEN, CLOTHESYELLOW, CLOTHESPINK, CLOTHESRED } from '../shared/clothes-mock'

@Component({
  selector: 'app-clothes-gen',
  templateUrl: './clothes-gen.component.html',
  styleUrls: ['./clothes-gen.component.css']
})
export class ClothesGenComponent implements OnInit {

  clothesList: Clothes[] = CLOTHES;
  @Output() clothesEvent = new EventEmitter<Clothes>();


  constructor() { }

  ngOnInit() {
  }

  onColorClickedBlue(){
    this.clothesList = CLOTHES;
  }

  onColorClickedGreen(){
    this.clothesList = CLOTHESGREEN;
  }

  onColorClickedYellow(){
    this.clothesList = CLOTHESYELLOW;
  }

  onColorClickedPink(){
    this.clothesList = CLOTHESPINK;
  }

  onColorClickedRed(){
    this.clothesList = CLOTHESRED;
  }

  onClothesClicked(clothes: Clothes){
    this.clothesEvent.emit(clothes);
  }

}
