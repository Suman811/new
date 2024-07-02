import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  courses: { name: string, duration: string }[] = [];
  editingCourseIndex: number = -1;
  editingCourse: { name: string, duration: string } = { name: '', duration: '' };

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.loadCoursesFromLocalStorage();
  }

  loadCoursesFromLocalStorage() {
    const coursesData = localStorage.getItem('courses');
    if (coursesData) {
      this.courses = JSON.parse(coursesData);
    }
  }

  
  deleteCourse(index: number) {
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '250px',
      data: { title: 'Confirm Deletion', message: 'Are you sure you want to delete this course?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses.splice(index, 1);
        this.updateLocalStorage();
      }
    });
  }

  editCourse(index: number) {
    this.editingCourseIndex = index;
    this.editingCourse = { ...this.courses[index] };
  }

  saveCourse() {
    if (this.editingCourseIndex !== -1) {
      this.courses[this.editingCourseIndex] = this.editingCourse;
      this.updateLocalStorage();
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingCourseIndex = -1;
    this.editingCourse = { name: '', duration: '' };
  }

  updateLocalStorage() {
    localStorage.setItem('courses', JSON.stringify(this.courses));
  }

}
