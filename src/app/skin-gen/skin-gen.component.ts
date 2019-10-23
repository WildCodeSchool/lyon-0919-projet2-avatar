import { Component, OnInit } from '@angular/core';
import { Tone } from '../shared/tone';
import { TONES } from '../shared/tones-mock';

@Component({
  selector: 'app-skin-gen',
  templateUrl: './skin-gen.component.html',
  styleUrls: ['./skin-gen.component.css']
})
export class SkinGenComponent implements OnInit {
  tonesList: Tone[] = TONES;
  skinDisplayed : Tone[] = [];

  constructor() { }

  ngOnInit() {
  }

  displaySkin(tone: Tone){
    this.skinDisplayed.push(tone);
    console.log(this.skinDisplayed);
  }

}
