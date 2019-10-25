import { Component, OnInit, Input } from '@angular/core';
import { TONES } from '../shared/tones-mock';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';

@Component({
  selector: 'app-display-avatar',
  templateUrl: './display-avatar.component.html',
  styleUrls: ['./display-avatar.component.css']
})
export class DisplayAvatarComponent implements OnInit {
  @Input() skinToDisplay : Avatar;
  tonesList: Tone[] = TONES;
  tone : Tone;

  constructor() { }

  ngOnInit() {
    console.log(this.skinToDisplay);
  }

}
