import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(comp.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app');
  }));
});
