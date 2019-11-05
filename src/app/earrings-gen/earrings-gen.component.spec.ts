import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringsGenComponent } from './earrings-gen.component';

describe('EarringsGenComponent', () => {
  let component: EarringsGenComponent;
  let fixture: ComponentFixture<EarringsGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarringsGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarringsGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
