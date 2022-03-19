import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralVacanciesComponent } from './mural-vacancies.component';

describe('MuralVacanciesComponent', () => {
  let component: MuralVacanciesComponent;
  let fixture: ComponentFixture<MuralVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
