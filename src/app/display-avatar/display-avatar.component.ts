import { Component, OnInit, Input } from '@angular/core';
import { TONES } from '../shared/tones-mock';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { EYES } from '../shared/eyes-mock';
import { Mouth } from '../shared/mouths';
import { MOUTHS } from '../shared/mouths-mock';
import { Hairiness } from '../shared/hairiness';
import { HAIRINESS } from '../shared/hairiness-mock';
import { Hair } from '../shared/hair';
import { HAIR } from '../shared/hair-mock';
import { Clothes } from '../shared/clothes';
import { CLOTHES } from '../shared/clothes-mock';
import { Eyebrows } from '../shared/eyebrows';
import { EYEBROWS } from '../shared/eyebrows-mock';
import { Earrings } from '../shared/earrings';
import { EARRINGS } from '../shared/earrings-mock';
import { Necklace } from '../shared/necklace';
import { NECKLACES } from '../shared/necklace-mock';
import { Hat } from '../shared/hat';
import { HAT } from '../shared/hat-mock';
import { Glasses } from '../shared/glasses';
import { GLASSES } from '../shared/glasses-mock';


@Component({
  selector: 'app-display-avatar',
  templateUrl: './display-avatar.component.html',
  styleUrls: ['./display-avatar.component.css']
})
export class DisplayAvatarComponent implements OnInit {

  @Input() displayAvatar : Avatar;
  tonesList: Tone[] = TONES;

  eyesList: Eyes[] = EYES;

  mouths: Mouth[] = MOUTHS;

  hairiness: Hairiness[] = HAIRINESS;
  
  hairList: Hair[] = HAIR;

  clothesList: Clothes[] = CLOTHES;
  clothe : Clothes;
  
  eyebrows: Eyebrows[] = EYEBROWS;

  glasses: Glasses[] = GLASSES;

  hats: Hat[] = HAT
  hat: Hat;

  necklace: Necklace[] = NECKLACES;

  earringsList : Earrings[] = EARRINGS;
  earrings : Earrings;

  constructor() { }

  ngOnInit() {
    //console.log(this.displayAvatar);
  }

}
