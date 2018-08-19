import { Directive, ViewContainerRef , HostListener , Input , ElementRef , Renderer} from '@angular/core';

@Directive({
  selector: '[appInject]'
})
export class InjectDirective {

  @Input() public lightColor: any;

  @Input()
  public set defaultColor(colorName: string) {
      this._defaultColor = colorName || this._defaultColor;
  }

  private _defaultColor = 'yellow';

  constructor(
    public viewContainerRef: ViewContainerRef,
    private _el: ElementRef,
    private _renderer: Renderer
  ) { }




  @HostListener('mouseenter', ['$event'])
    public onMouseEnter($event: MouseEvent): void {
        this._highlight(this.lightColor || this._defaultColor);
    }

  @HostListener('mouseleave', ['$event'])
    public onMouseLeave($event: MouseEvent): void {
        this._highlight(null);
    }

  @HostListener('click', ['$event'])
    public onClick($event: MouseEvent): void {
        this._highlight('black');
    }

  private _highlight(color: string): void {
      console.log(color, this._el);
      this._renderer.setElementStyle(this._el.nativeElement, 'color', color);
      // this._el.nativeElement.style.backgroundColor = color;
  }

}
