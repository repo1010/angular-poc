import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-unit-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('angular-unit-testing app is running!');
  });

  it(`should have as name 'vishal Kumar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.name).toEqual('Vishal Kumar');
  });

  it('should render name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Vishal Kumar');
  });

  it('getname method is called', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.componentInstance; 
      spyOn(compiled, 'getname');
      compiled.getname();
      expect(compiled.getname).toHaveBeenCalled();

  });
  it('getname method is called before', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.componentInstance; 
    spyOn(compiled, 'getname');
    compiled.getname();
    expect(compiled.getname).toHaveBeenCalledBefore;

});

it('getname method is called times', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const compiled = fixture.debugElement.componentInstance; 
  spyOn(compiled, 'getname');
  compiled.getname();
  expect(compiled.getname).toHaveBeenCalledTimes(1);

});

  it('getname method is called to setVariable value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.componentInstance;     
    compiled.getname();
    expect(compiled.setvariable).toBeTruthy();

});

it('getname method is called to setrandom value', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const compiled = fixture.debugElement.componentInstance;     
  compiled.getname();
  expect(compiled.setrandom).toEqual(120);

});
});
