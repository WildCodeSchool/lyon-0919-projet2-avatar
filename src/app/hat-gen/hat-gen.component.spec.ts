import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatGenComponent } from './hat-gen.component';

describe('HatGenComponent', () => {
  let component: HatGenComponent;
  let fixture: ComponentFixture<HatGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
