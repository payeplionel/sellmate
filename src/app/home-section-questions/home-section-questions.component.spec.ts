import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionQuestionsComponent } from './home-section-questions.component';

describe('HomeSectionQuestionsComponent', () => {
  let component: HomeSectionQuestionsComponent;
  let fixture: ComponentFixture<HomeSectionQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
