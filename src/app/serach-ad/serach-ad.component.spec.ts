import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachAdComponent } from './serach-ad.component';

describe('SerachAdComponent', () => {
  let component: SerachAdComponent;
  let fixture: ComponentFixture<SerachAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
