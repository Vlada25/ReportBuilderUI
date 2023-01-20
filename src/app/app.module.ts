import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/modal-components/register/register.component';
import { LoginComponent } from './components/modal-components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './classes/token-interceptor';
import { ChooseLabPageComponent } from './pages/choose-lab-page/choose-lab-page.component';
import { ChooseLabComponent } from './components/choose-lab/choose-lab.component';
import { BuildingReportPageComponent } from './pages/building-report-page/building-report-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    ModalComponent,
    ChooseLabPageComponent,
    ChooseLabComponent,
    BuildingReportPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
