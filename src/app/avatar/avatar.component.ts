import { Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { Mouth } from '../shared/mouths';
import { Hairiness } from '../shared/hairiness';
import { Hair } from '../shared/hair';
import { Eyebrows } from '../shared/eyebrows';
import { Glasses } from '../shared/glasses';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatarParent : Avatar = new Avatar;

  onSkinSelect(tone: Tone) {
    this.avatarParent.tone = tone;
  }

  onEyesSelect(eyes: Eyes) {
    this.avatarParent.eyes = eyes;
  }

  onEyebrowsSelect(eyebrows: Eyebrows) {
    this.avatarParent.eyebrows = eyebrows;
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

  onGlassesSelect(glasses: Glasses) {
    this.avatarParent.glasses = glasses;
  }

  constructor() { }

  ngOnInit() {
  }
}
