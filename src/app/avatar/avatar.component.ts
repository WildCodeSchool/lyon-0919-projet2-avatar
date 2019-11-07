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
import { TONES } from '../shared/tones-mock';
import { EYES } from '../shared/eyes-mock';
import { MOUTHS } from '../shared/mouths-mock';
import { EYEBROWS } from '../shared/eyebrows-mock';
import { HAIR } from '../shared/hair-mock';
import { HAIRINESS } from '../shared/hairiness-mock';
import { CLOTHES } from '../shared/clothes-mock';
import { GLASSES } from '../shared/glasses-mock';
import { EARRINGS } from '../shared/earrings-mock';
import { NECKLACES } from '../shared/necklace-mock';
import { HAT } from '../shared/hat-mock';


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
  hair : Hair;
  eyebrows : Eyebrows;
  hairiness : Hairiness;
  clothes : Clothes;
  earrings: Earrings;
  necklace: Necklace;
  glasses: Glasses;
  hat: Hat;

  toneList : Tone[] = TONES;
  eyesList : Eyes[] = EYES;
  mouthList : Mouth[] = MOUTHS;
  eyebrowList : Eyebrows[] = EYEBROWS;
  hairinessList : Hairiness[] = HAIRINESS;
  hairList : Hair[] = HAIR;
  earringsList : Earrings[] = EARRINGS;
  necklaceList :  Necklace[] = NECKLACES;
  hatList : Hat[] = HAT;
  clothesList : Clothes[] = CLOTHES;
  glassesList : Glasses[] = GLASSES;

  elementsAvatar : string[] =["tone", "eyes", "mouth", "hair", "eyebrows", "hairiness", "clothes", "earrings", "necklace", "glasses","hat"];

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

  onRandomClicked() {
    this.avatarParent.tone = this.toneList[Math.floor(Math.random() * (this.toneList.length))];
    this.avatarParent.eyes = this.eyesList[Math.floor(Math.random() * (this.eyesList.length))];
    this.avatarParent.mouth = this.mouthList[Math.floor(Math.random() * (this.mouthList.length))]; 
    this.avatarParent.eyebrows = this.eyebrowList[Math.floor(Math.random() * (this.eyebrowList.length))]; 
    this.avatarParent.hairiness = this.hairinessList[Math.floor(Math.random() * (this.hairinessList.length))]; 
    this.avatarParent.hair = this.hairList[Math.floor(Math.random() * (this.hairList.length))]; 
    this.avatarParent.earrings = this.earringsList[Math.floor(Math.random() * (this.earringsList.length))]; 
    this.avatarParent.necklace = this.necklaceList[Math.floor(Math.random() * (this.necklaceList.length))]; 
    this.avatarParent.hat = this.hatList[Math.floor(Math.random() * (this.hatList.length))]; 
    this.avatarParent.clothes = this.clothesList[Math.floor(Math.random() * (this.clothesList.length))]; 
    this.avatarParent.glasses = this.glassesList[Math.floor(Math.random() * (this.glassesList.length))]; 
  }

  onCancelClicked() {
    this.avatarParent = new Avatar();
    this.selectedValue = this.elementsAvatar[0];
  }

}
