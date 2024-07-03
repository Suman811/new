import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AddComponent } from './add/add.component';
import{EditComponent} from './edit/edit.component';
import { ConfirmDialogueComponent } from './confirm-dialogue/confirm-dialogue.component';


const routes: Routes = [
  {path:'', component:CourseComponent},
  // {path:'add', component:AddComponent},
  // {path:'edit', component:EditComponent},
  // {path:'confirmdialog',component:ConfirmDialogueComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcourseRoutingModule { }
