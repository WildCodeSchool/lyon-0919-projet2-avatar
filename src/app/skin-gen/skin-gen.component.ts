import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TONES } from '../shared/tones-mock';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';

@Component({
  selector: 'app-skin-gen',
  templateUrl: './skin-gen.component.html',
  styleUrls: ['./skin-gen.component.css']
})
export class SkinGenComponent implements OnInit {
  tonesList: Tone[] = TONES;
  tone : Tone;
  avatar : Avatar = new Avatar();
  @Output() skinEvent = new EventEmitter<Tone>();


  constructor() { }

  ngOnInit() {
  }

  onSkinClicked(tone: Tone) {
    this.avatar.tone = tone;
    this.skinEvent.emit(tone);
    //console.log(tone);
  }

}
