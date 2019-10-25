import { Component, OnInit, Output } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatarParent : Avatar = new Avatar;
  tone : Tone;

  onSkinSelect(tone: Tone) {
    this.avatarParent.tone = tone;
    //console.log(tone);
  }

  constructor() { }

  ngOnInit() {
  }
}
