import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairGenComponent } from './hair-gen.component';

describe('HairGenComponent', () => {
  let component: HairGenComponent;
  let fixture: ComponentFixture<HairGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
