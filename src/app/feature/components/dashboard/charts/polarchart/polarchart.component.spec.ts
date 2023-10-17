import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarchartComponent } from './polarchart.component';

describe('PolarchartComponent', () => {
  let component: PolarchartComponent;
  let fixture: ComponentFixture<PolarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
