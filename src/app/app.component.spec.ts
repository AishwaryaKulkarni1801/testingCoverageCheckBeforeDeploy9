import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

describe('AppComponent', () => {
  let dateSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent, DemoComponent]
    }).compileComponents();

    // Stabilize time output in DemoComponent template to avoid ExpressionChangedAfterItHasBeenCheckedError
    dateSpy = jest.spyOn(Date.prototype, 'toLocaleTimeString').mockReturnValue('12:00:00 PM');
  });

  afterEach(() => {
    // Restore the spy to avoid leaking across tests
    if (dateSpy) {
      dateSpy.mockRestore();
    }
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Demo App'`, () => {
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
