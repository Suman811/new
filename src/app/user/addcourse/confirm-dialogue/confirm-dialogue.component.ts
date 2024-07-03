import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.scss']
})
export class ConfirmDialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string },
    private toastr:ToastrService
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
    this.toastr.success("Delete Succesful");
  }

}
