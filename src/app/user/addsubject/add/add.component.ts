import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  subjectForm: FormGroup;

  isdeleteContentShow : boolean = false;
  iseditContentShow : boolean = true;

listCourse:any[]=[];

  constructor(
    private toastr:ToastrService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string },
  
  ) {
    this.subjectForm = this.fb.group({
      course:['',Validators.required],
      semester: ['', Validators.required],
      name: ['', Validators.required],
      marks:['',Validators.required]
    });

    let coursedata=JSON.parse(
      localStorage.getItem('courses')||''
    );
    this.listCourse=coursedata;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.subjectForm.valid) {
      this.dialogRef.close(this.subjectForm.value);
      console.log(this.subjectForm.value);
      this.toastr.success("course added successfully");
    }
  }
  subjects: {  course: string, semester: number , subject:string, marks:number }[] = [];

  ngOnInit() {
    this.loadCoursesFromLocalStorage();
  }

  loadCoursesFromLocalStorage() {

  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
    this.toastr.success("Delete Succesful");
  }

  changeEdit() {
    this.isdeleteContentShow = false;
    this.iseditContentShow = true;
  }

  changedelete() {
    this.isdeleteContentShow = true;
    this.iseditContentShow = false;
  }
}



