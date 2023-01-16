import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionServicesComponent } from './home-section-services.component';

describe('HomeSectionServicesComponent', () => {
  let component: HomeSectionServicesComponent;
  let fixture: ComponentFixture<HomeSectionServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
