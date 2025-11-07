import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

describe('AppComponent', () => {
<<<<<<< HEAD
=======
  let dateSpy: jest.SpyInstance;

>>>>>>> 5d651121e32e06614eb98e125e8daba5e16c886f
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent, DemoComponent]
    }).compileComponents();
<<<<<<< HEAD
=======

    // Stabilize time output in DemoComponent template to avoid ExpressionChangedAfterItHasBeenCheckedError
    dateSpy = jest.spyOn(Date.prototype, 'toLocaleTimeString').mockReturnValue('12:00:00 PM');
  });

  afterEach(() => {
    // Restore the spy to avoid leaking across tests
    if (dateSpy) {
      dateSpy.mockRestore();
    }
>>>>>>> 5d651121e32e06614eb98e125e8daba5e16c886f
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it('should have as title \'Angular Demo App\'', () => {
=======
  it(`should have as title 'Angular Demo App'`, () => {
>>>>>>> 5d651121e32e06614eb98e125e8daba5e16c886f
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Demo App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular Demo App');
  });

  it('should return Angular version', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getAngularVersion()).toBe('16.x');
  });
});
