import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PraFormsComponent } from './pra-forms/pra-forms.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PraFormsComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
