import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesGenComponent } from './clothes-gen.component';

describe('ClothesGenComponent', () => {
  let component: ClothesGenComponent;
  let fixture: ComponentFixture<ClothesGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
