import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockWidgetComponent } from './clock-widget.component';

describe('ClockWidgetComponent', () => {
  let component: ClockWidgetComponent;
  let fixture: ComponentFixture<ClockWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClockWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
