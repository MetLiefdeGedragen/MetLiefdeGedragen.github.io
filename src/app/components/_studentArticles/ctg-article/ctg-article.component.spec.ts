import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtgArticleComponent } from './ctg-article.component';

describe('CtgArticleComponent', () => {
  let component: CtgArticleComponent;
  let fixture: ComponentFixture<CtgArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtgArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtgArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
