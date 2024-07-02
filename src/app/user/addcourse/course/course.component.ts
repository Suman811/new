import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';

interface Course {
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
  displayedColumns: string[] = ['name', 'duration'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveCourse(result);
        this.loadCourses();
      }
    });
  }

  saveCourse(course: Course): void {
    let courses = JSON.parse(localStorage.getItem('courses') || '[]');
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  loadCourses(): void {
    this.courses = JSON.parse(localStorage.getItem('courses') || '[]');
  }
}


