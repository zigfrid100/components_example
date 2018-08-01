import { Component } from '@angular/core';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent {

  public date: Date;

  public editDate() {
    this.date = null;
  }
}
