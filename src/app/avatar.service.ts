import { Injectable } from '@angular/core';
import { Avatar } from './shared/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  avatar: Avatar;
  avatarCreated: Avatar[] = [];

  public getAvatars(avatar: Avatar) {
    this.avatarCreated.push(avatar);
    //console.log(this.avatarCreated);
  }

  public resetAvatar(avatar: Avatar) {
    this.avatarCreated = [];
  }


  constructor() { }
}
