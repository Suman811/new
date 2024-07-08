import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsubjectRoutingModule } from './addsubject-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    SubjectComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AddsubjectRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class AddsubjectModule { }
