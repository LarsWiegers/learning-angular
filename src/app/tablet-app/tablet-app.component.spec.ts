import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletAppComponent } from './tablet-app.component';

describe('TabletAppComponent', () => {
  let component: TabletAppComponent;
  let fixture: ComponentFixture<TabletAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
