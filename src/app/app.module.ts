import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  { path: 'helloWorld', component: HelloWorldComponent }, 
  { path: 'countries', component: CountriesComponent }, 
  { path: 'country/:id', component: CountryDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CountriesComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
