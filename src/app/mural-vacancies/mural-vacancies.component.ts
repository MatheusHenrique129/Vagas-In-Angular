import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models/Vacancies.model';
import { VacanciesService } from '../vacancies.service';

@Component({
  selector: 'app-mural-vacancies',
  templateUrl: './mural-vacancies.component.html',
  styleUrls: ['./mural-vacancies.component.css']
})
export class MuralVacanciesComponent implements OnInit {
  public vacancies: Vacancy[] = [];

  constructor(private _vacanciesService: VacanciesService) { }
  ngOnInit(): void {
    this.listVacancies();
  }

  listVacancies(){
    this._vacanciesService.getVacancies()
      .subscribe(
        returnVacancy => {
          this.vacancies = returnVacancy.map(
            item => {
              return new Vacancy(
                item.id,
                item.name,
                item.photo,
                item.description,
                item.salary
              ); 
            } );
        } );
  }
}
