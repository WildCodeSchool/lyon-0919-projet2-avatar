import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklaceGenComponent } from './necklace-gen.component';

describe('NecklaceGenComponent', () => {
  let component: NecklaceGenComponent;
  let fixture: ComponentFixture<NecklaceGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecklaceGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklaceGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
