import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponentFormComponent } from './blog-component-form.component';

describe('BlogComponentFormComponent', () => {
  let component: BlogComponentFormComponent;
  let fixture: ComponentFixture<BlogComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
