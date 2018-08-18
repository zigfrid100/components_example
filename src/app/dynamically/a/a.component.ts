import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'div[app-type=section]',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {

  @Input() active: any;


  constructor(public viewContainerRef: ViewContainerRef) {}

}
