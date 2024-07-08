import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';
import { ToastrService } from 'ngx-toastr';

export interface Course {
  id?: number;
  name: string;
  duration: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  courses: Course[] = [];
  editingCourseIndex: number = -1;
  // editingCourse: { name: string, duration: string } = { name: '', duration: '' };
  idcounter = 1;
  // courses: Course[] = [];
  displayedColumns: string[] = ['name', 'duration'];

  constructor(private dialog: MatDialog, private toastr:ToastrService) {
    this.idcounter = localStorage.getItem('idcounter') ? parseInt(localStorage.getItem('idcounter')!) : 1;
    this.loadCourses();
  }
  loadCourses(): void {
    this.courses = localStorage.getItem('courses') ? JSON.parse(localStorage.getItem('courses')!) : [];
  }

  ngOnInit(): void {
    // this.loadCourses();
  }

  addCourseDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = this.idcounter;
        this.idcounter++;
        // this.saveCourse(result);
        let courses = JSON.parse(localStorage.getItem('courses') || '[]');
        courses.push(result);
        localStorage.setItem('courses', JSON.stringify(courses));
        this.loadCourses();
        localStorage.setItem('idcounter', this.idcounter.toString());

      }
    });
  }

  editCourse(course: Course) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '400px',
      data:{course}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses = this.courses.map(c => c.id === result.id ? result : c);
        localStorage.setItem('courses', JSON.stringify(this.courses));
        this.loadCourses();
      }
    });
  }

  saveCourse(course: Course): void {
    let courses = JSON.parse(localStorage.getItem('courses') || '[]');
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  deleteCourse(index: number) {
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '250px',
      data: { title: 'Confirm Deletion', message: 'Are you sure you want to delete this course?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.courses = this.courses.filter(c => c.id !== index);

        // this.courses=this.courses.splice(index,1);
        this.updateLocalStorage();
      }
    });
    
    
  }
  updateLocalStorage() {
    localStorage.setItem('courses', JSON.stringify(this.courses));
  }

}


