import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAvatarComponent } from './display-avatar.component';

describe('DisplayAvatarComponent', () => {
  let component: DisplayAvatarComponent;
  let fixture: ComponentFixture<DisplayAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
