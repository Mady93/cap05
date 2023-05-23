import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseCoordinateComponent } from './mouse-coordinate.component';

describe('MouseCoordinateComponent', () => {
  let component: MouseCoordinateComponent;
  let fixture: ComponentFixture<MouseCoordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseCoordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseCoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
