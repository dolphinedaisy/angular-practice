import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PraFormsComponent } from './pra-forms/pra-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RxjsDemoComponentComponent } from './rxjs-demo-component/rxjs-demo-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PraFormsComponent,
    NotFoundComponentComponent,
    RxjsDemoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
