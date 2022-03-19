import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models/Vacancies.model';
import { VacanciesService } from '../vacancies.service';

@Component({
  selector: 'app-panel-vacancies',
  templateUrl: './panel-vacancies.component.html',
  styleUrls: ['./panel-vacancies.component.css']
})
export class PanelVacanciesComponent implements OnInit {

    public vacancy: Vacancy = new Vacancy(0, '', '', '', 0);
  
    constructor(private _vacanciesService: VacanciesService) {}
  
    ngOnInit(): void {}
  
    register() {
      this._vacanciesService.registerVacancy(this.vacancy).subscribe(
        vacancy => {
        this.vacancy = new Vacancy(0, '', '', '', 0);
        (err: any) => {
          alert('erro ao cadastrar');
        };
      });
  
      window.location.href = '/mural-vacancies';
    }
  
    update(id: number) {
      this._vacanciesService.updateVacancy(id, this.vacancy).subscribe((vacancy) => {
        this.vacancy = new Vacancy(0, '', '', '', 0);
        (err: any) => {
          alert('erro ao atualizar');
        };
      });
  
      window.location.href = '/mural-vacancies';
    }
  
    delete(id: number) {
      this._vacanciesService.deleteVacancy(id).subscribe((vacancy) => {
        this.vacancy = new Vacancy(0, '', '', '', 0);
        (err: any) => {
          alert('erro ao Excluir');
        };
      });
  
      window.location.href = '/mural-vacancies';
    }
  }