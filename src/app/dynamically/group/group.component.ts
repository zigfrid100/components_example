import { InputCustomComponent } from './../../input-custom/input-custom.component';
import { AComponent } from './../a/a.component';
import { BComponent } from '../b/b.component';
import { HelloComponent } from '../../hello/hello.component';
import { DataPickerComponent } from '../../data-picker/data-picker.component';

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

  @ViewChildren(AComponent) sections: QueryList<any>;
  activeSections: any[];
  componentFactory: ComponentFactory<any>[] = [];
  // componentList: any = [HelloComponent, InputCustomComponent, DataPickerComponent];
  componentList: any = [HelloComponent, HelloComponent, HelloComponent];


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {  }

  ngOnInit() {

    this.componentList.forEach(element => {
      this.componentFactory.push(this.componentFactoryResolver.resolveComponentFactory(element));
    });

    setTimeout(() => {
      this.onAddComponentClick();
    }, 1);

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
      this.componentFactory.forEach(element => {
        section.viewContainerRef.createComponent(element);

      });
      section.viewContainerRef.element.nativeElement.className = 'cell';

    });
   }

}
