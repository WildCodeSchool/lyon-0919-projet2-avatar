import { Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { Mouth } from '../shared/mouths';
import { Hairiness } from '../shared/hairiness';
import { Hair } from '../shared/hair';
import { Clothes} from '../shared/clothes';
import { Eyebrows } from '../shared/eyebrows';
import { Earrings } from '../shared/earrings';
import { Necklace } from '../shared/necklace';
import { Hat } from '../shared/hat';
import { Glasses } from '../shared/glasses';


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
  eyebrows : Eyebrows;
  earrings: Earrings;
  hat: Hat;


  elementsAvatar : string[] =["tone", "eyes", "mouth", "eyebrows", "hairiness", "hair", "earrings", "necklace", "hat", "clothes", "glasses"];
  selectedIndex = 0;
  selectedValue = this.elementsAvatar[this.selectedIndex];

  constructor() { }

  ngOnInit() {
  }

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


  onEarringsSelect(earrings: Earrings) {
    this.avatarParent.earrings = earrings;
    console.log(this.avatarParent.earrings)
  }

  onNecklaceSelect(necklace: Necklace) {
    this.avatarParent.necklace = necklace;
  }

  onHatSelect(hat: Hat) {
    this.avatarParent.hat = hat;
  }

  onClotheSelect(clothes: Clothes) {
    this.avatarParent.clothes = clothes;
  }

  onGlassesSelect(glasses: Glasses) {
    this.avatarParent.glasses = glasses;

  }

  clickNext(){
    if(this.selectedIndex != this.elementsAvatar.length-1 ){
      this.selectedIndex++;
      this.selectedValue = this.elementsAvatar[this.selectedIndex];
    }
    console.log (this.selectedValue)
  }


  clickPrevious(){
    if(this.selectedIndex != 0){
      this.selectedIndex--;
      this.selectedValue = this.elementsAvatar[this.selectedIndex];
    }
    console.log (this.selectedValue)
  }


}
