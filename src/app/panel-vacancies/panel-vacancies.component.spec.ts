import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelVacanciesComponent } from './panel-vacancies.component';

describe('PanelVacanciesComponent', () => {
  let component: PanelVacanciesComponent;
  let fixture: ComponentFixture<PanelVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
