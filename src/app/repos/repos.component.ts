import { Component, OnInit } from '@angular/core';
import {Friend, FRIENDLIST} from '../friends';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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

  pagesValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        if ( index === 50000) {
          break;
        }
      }
      const tempForLoopEnd = Date.now();
      this.timeForLoop = (tempForLoopEnd - tempForLoopStart) / 1000;

      const tempForEachStart = Date.now();
      this.iterationen.forEach(element => {
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

  getBase64Image(img) {
    console.log('getBase64Image');
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL('../../assets ');
    return dataURL;
  }


captureScreen() {
  console.log('captureScreen');
  const doc = new jspdf();
  for (let i = 0 ; i < this.pagesValue.length - 1 ; i++) {
   const imageData = this.getBase64Image(document.getElementById('friend' + i));
   // console.log(imageData);
     doc.addImage(imageData, 'JPG', 10, (i + 1) * 10, 180, 150);
     doc.addPage();
  }
  doc.save('Test.pdf');
}


isTimeForeachBetter() {
  let result = 'red';

  if (this.timeForLoop < this.timeForeach) {
    result = 'green';
  }
  return result;
}


}
