import { Injectable } from '@angular/core';
import { Avatar } from './shared/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  avatar: Avatar;
  avatarCreated : Avatar = new Avatar;
  showAvatar = 'none';

  constructor() { }
}
