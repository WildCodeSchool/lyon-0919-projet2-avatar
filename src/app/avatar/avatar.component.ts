import { Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { Mouth } from '../shared/mouths';
import { Hairiness } from '../shared/hairiness';
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
  mouth: Mouth;
  hairiness : Hairiness;
  hair : Hair;

  onSkinSelect(tone: Tone) {
    this.avatarParent.tone = tone;
    //console.log(tone);
  }

  onEyesSelect(eyes: Eyes) {
    this.avatarParent.eyes = eyes;
  }

  onHairinessSelect(hairiness: Hairiness) {
    this.avatarParent.hairiness = hairiness;
  }

  onHairSelect(hair: Hair) {
    this.avatarParent.hair = hair;

  }

  onMouthSelect(mouth: Mouth) {
    this.avatarParent.mouth = mouth;
  }

  constructor() { }

  ngOnInit() {
  }
}
