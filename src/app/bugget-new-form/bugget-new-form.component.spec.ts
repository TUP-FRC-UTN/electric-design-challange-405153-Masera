import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuggetNewFormComponent } from './bugget-new-form.component';

describe('BuggetNewFormComponent', () => {
  let component: BuggetNewFormComponent;
  let fixture: ComponentFixture<BuggetNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuggetNewFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuggetNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
