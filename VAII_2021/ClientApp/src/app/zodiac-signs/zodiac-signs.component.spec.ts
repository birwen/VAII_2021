import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacSignsComponent } from './zodiac-signs.component';

describe('ZodiacSignsComponent', () => {
  let component: ZodiacSignsComponent;
  let fixture: ComponentFixture<ZodiacSignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZodiacSignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
