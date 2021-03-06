import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes : Routes = [
  {path:'tasks', component:TasksComponent},
  {path:'tasks/:id', component:TaskDetailComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
