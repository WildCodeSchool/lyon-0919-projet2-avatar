import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairinessGenComponent } from './hairiness-gen.component';

describe('HairinessGenComponent', () => {
  let component: HairinessGenComponent;
  let fixture: ComponentFixture<HairinessGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairinessGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairinessGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
