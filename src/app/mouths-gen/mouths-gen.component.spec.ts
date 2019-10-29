import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouthsGenComponent } from './mouths-gen.component';

describe('MouthsGenComponent', () => {
  let component: MouthsGenComponent;
  let fixture: ComponentFixture<MouthsGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouthsGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouthsGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
