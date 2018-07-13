import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdComponent } from './display-ad.component';

describe('DisplayAdComponent', () => {
  let component: DisplayAdComponent;
  let fixture: ComponentFixture<DisplayAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
