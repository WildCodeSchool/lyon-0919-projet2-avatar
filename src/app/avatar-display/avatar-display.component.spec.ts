import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDisplayComponent } from './avatar-display.component';

describe('AvatarDisplayComponent', () => {
  let component: AvatarDisplayComponent;
  let fixture: ComponentFixture<AvatarDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
