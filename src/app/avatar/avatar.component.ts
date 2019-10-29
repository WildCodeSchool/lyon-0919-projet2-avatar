import { Component, OnInit } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';
import { Eyes } from '../shared/eyes';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatarParent : Avatar = new Avatar;
  tone : Tone;
  eyes : Eyes;

  elementsAvatar : string[] =["skin", "eyes", "mouth", "eyebrow", "hair", "beard", "clothes", "glasses", "jewellery", "hat"];
  selectedIndex = 0;
  selectedValue = this.elementsAvatar[this.selectedIndex];

  constructor() { }

  ngOnInit() {
  }

  onSkinSelect(tone: Tone) {
    this.avatarParent.tone = tone;
    //console.log(tone);
  }

  onEyesSelect(eyes: Eyes) {
    this.avatarParent.eyes = eyes;

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
