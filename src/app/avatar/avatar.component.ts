import { Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';
import { Mouth } from '../shared/mouths';
import { Hairiness } from '../shared/hairiness';
import { Hair } from '../shared/hair';
import { Clothes} from '../shared/clothes';
import { Eyebrows } from '../shared/eyebrows';

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
  clothes : Clothes
  eyebrows : Eyebrows;

  elementsAvatar : string[] =["skin", "eyes", "mouth", "eyebrow", "hair", "beard", "clothes", "glasses", "jewellery", "hat"];
  selectedIndex = 0;
  selectedValue = this.elementsAvatar[this.selectedIndex];


  ngOnInit() {
  }

  onSkinSelect(tone: Tone) {
    this.avatarParent.tone = tone;
    //console.log(tone);
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

  onClotheSelect(clothes: Clothes) {
    this.avatarParent.clothes = clothes;
  }

  constructor() { }
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
