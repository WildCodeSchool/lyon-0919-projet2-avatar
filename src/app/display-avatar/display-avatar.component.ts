import { Component, OnInit, Input } from '@angular/core';
import { TONES } from '../shared/tones-mock';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { EYES } from '../shared/eyes-mock';
import { Hairiness } from '../shared/hairiness';
import { HAIRINESS } from '../shared/hairiness-mock';
import { Hair } from '../shared/hair';
import { HAIR } from '../shared/hair-mock';

@Component({
  selector: 'app-display-avatar',
  templateUrl: './display-avatar.component.html',
  styleUrls: ['./display-avatar.component.css']
})
export class DisplayAvatarComponent implements OnInit {
  @Input() displayAvatar : Avatar;
  tonesList: Tone[] = TONES;
  tone : Tone;

  eyesList: Eyes[] = EYES;
  eyes : Eyes;  

  hairiness: Hairiness[] = HAIRINESS;
  
  hairList: Hair[] = HAIR;
  hair : Hair; 


  constructor() { }

  ngOnInit() {
    console.log(this.displayAvatar);
  }

}
