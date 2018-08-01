import { Component } from '@angular/core';
import {Friend, FRIENDLIST} from '../friends';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent  {

  selectedFriend: Friend;
  friends: Friend[] = FRIENDLIST;
  onFriendSelect(friend: Friend) {
    this.selectedFriend = friend;
  }

}
