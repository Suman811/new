import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  courseForm: FormGroup;

  constructor(
    private toastr:ToastrService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddComponent>
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
  duration: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.courseForm.valid) {
      this.dialogRef.close(this.courseForm.value);
      console.log(this.courseForm.value);
      //localStorage.setItem('course_name',JSON.stringify(this.courseForm.value.name));
      //localStorage.setItem('course_duration',JSON.stringify(this.courseForm.value.duration));
      //localStorage.setItem('course', JSON.stringify(this.courses));
      this.toastr.success("course added successfully");
    }
  }
  courses: { name: string, duration: string }[] = [];

  ngOnInit() {
    this.loadCoursesFromLocalStorage();
  }

  loadCoursesFromLocalStorage() {
  
   // const n = localStorage.getItem('course-name');
   // const d = localStorage.getItem('course-duration');
    
  }
}

