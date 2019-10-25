import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinGenComponent } from './skin-gen.component';

describe('SkinGenComponent', () => {
  let component: SkinGenComponent;
  let fixture: ComponentFixture<SkinGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
