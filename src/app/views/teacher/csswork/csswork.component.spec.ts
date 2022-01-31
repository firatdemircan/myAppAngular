import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssworkComponent } from './csswork.component';

describe('CssworkComponent', () => {
  let component: CssworkComponent;
  let fixture: ComponentFixture<CssworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
