import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingReportPageComponent } from './pages/building-report-page/building-report-page.component';
import { ChooseLabPageComponent } from './pages/choose-lab-page/choose-lab-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'chooseLab', component: ChooseLabPageComponent },
  { path: 'buildingReport/:labNumber', component: BuildingReportPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
