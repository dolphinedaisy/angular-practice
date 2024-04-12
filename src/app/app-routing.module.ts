import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PraFormsComponent } from './pra-forms/pra-forms.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RxjsDemoComponentComponent } from './rxjs-demo-component/rxjs-demo-component.component';

const routes: Routes = [
  { path: 'praform', component: PraFormsComponent },
  { path: 'rxjs', component: RxjsDemoComponentComponent },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
