import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddcourseRoutingModule } from './addcourse-routing.module';
import { CourseComponent } from './course/course.component';
import { MatFormField } from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ConfirmDialogueComponent } from './confirm-dialogue/confirm-dialogue.component';

@NgModule({
  declarations: [
    CourseComponent,
    AddComponent,
    EditComponent,
    ConfirmDialogueComponent
  ],
  imports: [
    CommonModule,
    AddcourseRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule
  
  ]
})
export class AddcourseModule { }
