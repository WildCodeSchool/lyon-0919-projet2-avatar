import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesGenComponent } from './eyes-gen.component';

describe('EyesGenComponent', () => {
  let component: EyesGenComponent;
  let fixture: ComponentFixture<EyesGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyesGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyesGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
