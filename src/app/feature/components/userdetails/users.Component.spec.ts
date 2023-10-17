import { ComponentFixture, TestBed } from '@angular/core/testing';

import { usersComponent } from './users.Component';

describe('usersComponent', () => {
  let component: usersComponent;
  let fixture: ComponentFixture<usersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ usersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(usersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
