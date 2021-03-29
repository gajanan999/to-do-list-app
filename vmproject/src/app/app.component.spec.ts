import { TestBed, fakeAsync,tick, } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vmproject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vmproject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container .font-weight-bold').textContent).toContain('Vmware Project');
  });

  it('should have a table',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container .row table')).toBeTruthy();
  });


  it('should delete a To-Do item from the list',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ids.push(1);
    fixture.detectChanges();
    const event = new KeyboardEvent("keyup",{
      "key": "Delete",
    });
    fixture.detectChanges();
    document.dispatchEvent(event);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.todolist.length).toBe(2);
    });

  });

  it('should create extra row into the table', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges(); 
    let button = fixture.debugElement.nativeElement.querySelector('#addItem');
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.todolist.length).toBe(4);
    });
  }));
});
