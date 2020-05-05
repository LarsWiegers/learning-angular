import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go up one when pressed on the +', () => {
    let initialCount = component.count = 0;
    component.onCounterPlus();
    fixture.detectChanges();
    let afterCount = component.count;

    expect(initialCount).toBeLessThan(afterCount);
  });
  it('should go down one when pressed on the -', () => {
    let initialCount = component.count = 0;
    component.onCounterMinus();
    fixture.detectChanges();
    let afterCount = component.count;

    expect(initialCount).toBeGreaterThan(afterCount);
  });
});
