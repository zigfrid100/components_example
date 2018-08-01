import {Component, } from '@angular/core';
import {Friend, FRIENDLIST} from '../friends';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent  {

  selectedFriend: Friend;
  friends: Friend[] = FRIENDLIST;
  isCheckedArray: boolean[] = [false, false, false, false];

  name1 = 'Angular 6';
  name2 = 'Checkbox';
  marked = false;
  theCheckbox = false;
  constructor() { }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

}
