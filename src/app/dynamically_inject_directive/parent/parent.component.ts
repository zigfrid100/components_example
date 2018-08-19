import { Component,
          OnInit,
          QueryList,
          ViewChild,
          ViewChildren,
          ComponentFactoryResolver,
          ViewContainerRef,
          Renderer2} from '@angular/core';
import { InjectDirective } from '../inject.directive';
import { InjectedComponent } from '../injected/injected.component';
import { HelloComponent } from '../../hello/hello.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(InjectDirective) injectComp: any;

  componentFactory: any[] = [];
  viewContainerRef: ViewContainerRef[] = [];
  componentRefList: any[] = [];

  componentList: any = [InjectedComponent, HelloComponent, InjectedComponent];
  // componentList: any = [HelloComponent, HelloComponent, HelloComponent];

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private renderer: Renderer2) {
  }



  ngOnInit() {

    this.componentList.forEach(element => {
      this.addComp(element);
    });

    setTimeout(() => {
      let index: any = 0;
      this.componentList.forEach(element => {
        console.log(index);
        this.chengeColor(element , index);
        index = index + 1;
      });
    }, 1000);

    setTimeout(() => {
      this.componentList.forEach(element => {
        // this.removeComp(element);
      });
    }, 5000);


  }

  public addComp(component?: any) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
    this.componentFactory.push(componentFactory);
    const viewContainerRef = this.injectComp.viewContainerRef;
    this.viewContainerRef.push(viewContainerRef);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.name = 'bob';
    this.componentRefList.push(componentRef);

    setTimeout(() => {
      // componentRef.location.nativeElement.style.color = 'blue'; // https://alligator.io/angular/using-renderer2/
      this.renderer.setStyle(componentRef.location.nativeElement, 'color', 'green');
    }, 1000);
    this.renderer.setStyle(componentRef.location.nativeElement, 'color', 'red');

    console.log('inside od addComp()');
  }

  public removeComp(component: any) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.injectComp.viewContainerRef;
    const componentRef = viewContainerRef.remove();
    console.log('inside on removeComp()');
  }

  public chengeColor(componentRef: any, index: number ) {
    console.log('inside on chengeColor()');
    console.log(this.componentRefList[index]._component.name = 'obo');
    console.log(this.componentRefList[index].location.nativeElement);

    const temp = document.querySelector('h1');
    temp.style.color = 'blue';
    console.log(temp); // ('blue')); // = 'blue');

    // this.componentRefList[index].element.nativeElement.style.color = 'pink';
    // this.renderer.setProperty(componentRef.location.nativeElement, 'class', 'cell'); // , 'black');
    // this.componentRefList[index].element.nativeElement.style.color = 'black';


  }


}
