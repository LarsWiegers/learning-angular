import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonComponent} from './button.component';
import {AppComponent} from '../app.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default text when no prop is given', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent.trim()).toBe(component.text);
  });

  it('should render the given text prop as the text', () => {
    component.text = 'test';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent.trim()).toBe('test');
  });
});
