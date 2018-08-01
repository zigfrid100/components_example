import {Component, Input, OnInit} from '@angular/core';
import {Friend} from '../friends';

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.css']
})
export class CheckboxItemComponent {

  @Input()
  friend: Friend;

  marked = false;
  theCheckbox = false;

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
}
