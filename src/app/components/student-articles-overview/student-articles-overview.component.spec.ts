import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentArticlesOverviewComponent } from './student-articles-overview.component';

describe('StudentArticlesOverviewComponent', () => {
  let component: StudentArticlesOverviewComponent;
  let fixture: ComponentFixture<StudentArticlesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentArticlesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentArticlesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
