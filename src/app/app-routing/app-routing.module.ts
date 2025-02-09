import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from '../components/todos/todos.component';
import { AboutComponent } from '../components/pages/about/about.component';
const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
