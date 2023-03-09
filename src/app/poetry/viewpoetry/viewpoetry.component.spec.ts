import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpoetryComponent } from './viewpoetry.component';

describe('ViewpoetryComponent', () => {
  let component: ViewpoetryComponent;
  let fixture: ComponentFixture<ViewpoetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpoetryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
