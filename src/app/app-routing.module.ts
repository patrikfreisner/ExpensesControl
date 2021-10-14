import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseDetailsComponent } from './Component/BusinessComponent/expense-details/expense-details.component';
import { MainComponent } from './Component/BusinessComponent/main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
