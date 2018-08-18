import { AComponent } from './../a/a.component';
import { BComponent } from '../b/b.component';
import { HelloComponent } from '../../hello/hello.component';
import {
  Component,
  AfterViewInit,
  ViewChildren,
  OnInit,
  QueryList,
  ComponentFactoryResolver,
  ComponentFactory,
  EmbeddedViewRef,
  ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements AfterViewInit, OnInit {

  @ViewChildren(AComponent) sections: QueryList<AComponent>;
  activeSections: AComponent[];
  textComponentFactory: ComponentFactory<HelloComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {  }

  ngOnInit() {
    this.textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HelloComponent);
  }

  ngAfterViewInit() {
    this.activeSections = this.sections.reduce((result, section, index) => {
      if (section.active) {
        result.push(section);
      }
      return result;
    }, []);
  }

   onAddComponentClick() {
    this.activeSections.forEach((section) => {
      section.viewContainerRef.createComponent(this.textComponentFactory);
    });
   }

}
