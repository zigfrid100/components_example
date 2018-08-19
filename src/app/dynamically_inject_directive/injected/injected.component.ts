import { InjectDirective } from './../inject.directive';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-injected',
  templateUrl: './injected.component.html',
  styleUrls: ['./injected.component.css'],
  //  directives: [InjectDirective]
})
export class InjectedComponent implements OnInit {

  @Input() name: any;

  constructor() { }

  ngOnInit() {
  }

}
