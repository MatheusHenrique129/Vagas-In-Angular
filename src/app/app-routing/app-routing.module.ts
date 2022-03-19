import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralVacanciesComponent } from '../mural-vacancies/mural-vacancies.component';
import { PanelVacanciesComponent } from '../panel-vacancies/panel-vacancies.component';

const routes: Routes = [
  {path: 'mural-vacancies', component: MuralVacanciesComponent},
  {path: 'panel', component: PanelVacanciesComponent},
  {path: '', redirectTo: '/mural-vacancies', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
