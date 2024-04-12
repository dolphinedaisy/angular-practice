import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PraFormsComponent } from './pra-forms/pra-forms.component';

const routes: Routes = [
	 { path: 'praform', component: PraFormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
