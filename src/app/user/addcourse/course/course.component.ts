import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

courses: any[]=[];

constructor(public dialog:MatDialog){}

addcourse(){
  // const dialogRef = this.dialog.open(add, {

   
  // });

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed');
    
  // });
}

}
