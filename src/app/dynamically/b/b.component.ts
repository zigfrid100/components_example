import { Component, Output, OnInit , EventEmitter} from '@angular/core';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

  @Output() addComponentClick = new EventEmitter();

  constructor() {
   }

}
