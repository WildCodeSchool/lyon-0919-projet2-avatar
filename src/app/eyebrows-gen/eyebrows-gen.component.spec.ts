import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyebrowsGenComponent } from './eyebrows-gen.component';

describe('EyebrowsGenComponent', () => {
  let component: EyebrowsGenComponent;
  let fixture: ComponentFixture<EyebrowsGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyebrowsGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyebrowsGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
