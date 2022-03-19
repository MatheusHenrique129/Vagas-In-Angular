import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './models/Vacancies.model';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  private url = "http://localhost:3000/vacancies";

  constructor(private _httpClient: HttpClient) {}

  getVacancies(): Observable<Vacancy[]>{
    return this._httpClient.get<Vacancy[]>(this.url);
  }

  registerVacancy(vacancy: Vacancy): Observable<Vacancy[]> {
    return this._httpClient.post<Vacancy[]>(this.url, vacancy);
  }

  updateVacancy(id: any, vacancy: Vacancy): Observable<Vacancy[]> {
    const urlUpdate = `${this.url}/${id}`;
    return this._httpClient.put<Vacancy[]>(urlUpdate, vacancy);
  }

  deleteVacancy(id: any): Observable<Vacancy[]> {
    const urlDelete = `${this.url}/${id}`;
    return this._httpClient.delete<Vacancy[]>(urlDelete);
  }
}
