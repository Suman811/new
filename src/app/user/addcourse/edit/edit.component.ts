import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  course: any = {};

  constructor(
    @Optional() public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr:ToastrService
      ) 
   
    
    {
    this.course = { ...data.course }
    }

  saveCourse() {
    this.dialogRef.close(this.course);
    this.toastr.success("Edit Succesful");
  }

  cancelEdit() {
    this.dialogRef.close();
  }

}
