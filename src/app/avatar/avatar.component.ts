import { Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { Hair } from '../shared/hair';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatarParent : Avatar = new Avatar;
  tone : Tone;
  eyes : Eyes;
  hair : Hair;

  onSkinSelect(tone: Tone) {
    this.avatarParent.tone = tone;
    //console.log(tone);
  }

  onEyesSelect(eyes: Eyes) {
    this.avatarParent.eyes = eyes;

  }

  onHairSelect(hair: Hair) {
    this.avatarParent.hair = hair;

  }

  constructor() { }

  ngOnInit() {
  }
}
