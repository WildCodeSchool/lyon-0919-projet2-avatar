import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassesGenComponent } from './glasses-gen.component';

describe('GlassesGenComponent', () => {
  let component: GlassesGenComponent;
  let fixture: ComponentFixture<GlassesGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassesGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassesGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
