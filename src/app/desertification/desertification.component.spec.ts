import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertificationComponent } from './desertification.component';

describe('DesertificationComponent', () => {
  let component: DesertificationComponent;
  let fixture: ComponentFixture<DesertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
