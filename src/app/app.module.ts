import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule, MatIconModule} from "@angular/material";
import {MatInputModule} from "@angular/material";
import {MatButtonModule} from "@angular/material";
import {MatSelectModule} from "@angular/material";
import {MatDatepickerModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material";
import {MatCardModule} from "@angular/material";
import {DbService} from "./db.service";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplicationComponent } from './application/application.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DirectionComponent } from './application/direction/direction.component';
import { KeysPipe } from './application/direction/keys.pipe';
import { ExamComponent } from './application/exam/exam.component';

const appRoutes: Routes  =[
  {path:'', component: WelcomeComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'application', component: ApplicationComponent},
  {path:'profile', component: ProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProfileComponent,
    ApplicationComponent,
    WelcomeComponent,
    DirectionComponent,
    KeysPipe,
    ExamComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    DbService,
    {provide: MAT_DATE_LOCALE, useValue: 'ru'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
