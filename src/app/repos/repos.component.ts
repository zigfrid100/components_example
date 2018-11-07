import { Component, OnInit } from '@angular/core';
import {Friend, FRIENDLIST} from '../friends';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  timeForLoop = 0;
  timeForeach = 0;
  dif = 0.0;
  iterationen = [];

  selectedFriend: Friend;
  friends: Friend[] = FRIENDLIST;
  onFriendSelect(friend: Friend) {
    this.selectedFriend = friend;
  }

  ngOnInit(): void {

    for (let index = 0; index < 100000; index++) {
      this.iterationen.push(index);
    }

    setTimeout( () => {

      const tempForLoopStart = Date.now();
      for (let index = 0; index < this.iterationen.length; index++) {
        console.log(index);
        if ( index === 50000) {
          break;
        }
      }
      const tempForLoopEnd = Date.now();
      this.timeForLoop = (tempForLoopEnd - tempForLoopStart) / 1000;


      const tempForEachStart = Date.now();
      this.iterationen.forEach(element => {
        console.log(element);
      });
      const tempForEachEnd = Date.now();
      this.timeForeach = (tempForEachEnd - tempForEachStart) / 1000;



      if (this.timeForLoop < this.timeForeach ) {
        this.dif = ((this.timeForeach - this.timeForLoop) / this.timeForLoop) * 100;
      } else {
        this.dif = ((this.timeForLoop - this.timeForeach) / this.timeForLoop) * 100;
      }

    }, 1000);





  }

  isTimeForeachBetter() {
    let result = 'red';

    if (this.timeForLoop < this.timeForeach) {
      result = 'green';
    }
    return result;
  }


}
