import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent }  from './taskmanager/addtask/addtask.component';
import { ListTaskComponent } from './taskmanager/listtask/listtask.component';


const routes: Routes = [
  {
    path : 'addtask',
    component : AddTaskComponent
  },
  {
    path: 'listtask',
    component : ListTaskComponent
  },
  {
    path : '',
    redirectTo : '/addtask',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
