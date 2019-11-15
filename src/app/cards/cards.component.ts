import { Component, OnInit } from '@angular/core';
import { Cards } from '../shared/cards';
import { Card } from '../shared/card';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../shared/avatar';
import { Buble } from '../shared/buble';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  displayCards: Cards = new Cards();
  card: Card;
  buble: Buble;
  avatarToDisplay: Avatar;
  displayMessageBuble: string;

  elementsCard: string[] =["card", "buble"];

  selectedIndex = 0;
  selectedValue = this.elementsCard[this.selectedIndex];

  constructor(private avatarService : AvatarService, private router: Router) { }

  ngOnInit() {
    this.avatarToDisplay = this.avatarService.avatarCreated;
    console.log(this.avatarToDisplay);
  }
  
  onCardSelected(c: Card) {
    this.displayCards.card = c;
  }

  onValidClicked() {
    this.router.navigate(['/contact']);
  }

  onBubleSelect(buble: Buble){
    console.log(buble);
    this.displayCards.buble = buble;
    
  }

  clickNext(){
    if(this.selectedIndex != this.elementsCard.length-1 ){
      this.selectedIndex++;
      this.selectedValue = this.elementsCard[this.selectedIndex];
    }
    // console.log (this.selectedValue)
  }

  clickPrevious(){
    if(this.selectedIndex != 0){
      this.selectedIndex--;
      this.selectedValue = this.elementsCard[this.selectedIndex];
    }
  }

  sendMessageBuble(messageBuble){
    this.displayMessageBuble= messageBuble;
  }

  onReturnClicked() {
    this.router.navigate(['/avatar']);
  }

  onSaveClicked(){ 
    html2canvas(document.querySelector("#capture"),{
      backgroundColor: null
    }).then(canvas => {
      // Convert the canvas to blob
      canvas.toBlob(function(blob){
        // To download directly on browser default 'downloads' location
        let link = document.createElement("a");
        link.download = "image.png";
        link.href = URL.createObjectURL(blob);
        link.click();
        // To save manually somewhere in file explorer
      },'image/png');
    });
  }

  
}
