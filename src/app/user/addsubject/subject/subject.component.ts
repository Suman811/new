import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddComponent } from '../add/add.component';



export interface Subject {
  id?: number;
  name: string;
  semester: number;
  marks:number;
  course:string;
}



@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  subjects: Subject[] = [];
  editingCourseIndex: number = -1;

  @ViewChild(AddComponent)
  addcomponent!: AddComponent;

  counter = 1;

  //displayedColumns: string[] = [ 'course','semester', 'name', 'marks'];

  constructor(private dialog: MatDialog, private toastr:ToastrService) {
    this.counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')!) : 1;
    this.loadSubjects();
  }
  loadSubjects(): void {
    this.subjects = localStorage.getItem('subjects') ? JSON.parse(localStorage.getItem('subjects')!) : [];
  }


  ngOnInit(): void {
  
  }

  addSubjectDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px'
    }); 
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = this.counter;
        this.counter++;
        // this.saveCourse(result);
        let subjects = JSON.parse(localStorage.getItem('subjects') || '[]');
        subjects.push(result);
        localStorage.setItem('subjects', JSON.stringify(subjects));
        this.loadSubjects();
        localStorage.setItem('counter', this.counter.toString());

      }
    });
  }


  editSubject(subject: Subject) {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px',
      data:{subject}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subjects = this.subjects.map(c => c.id === result.id ? result : c);
        localStorage.setItem('subjects', JSON.stringify(this.subjects));
        this.loadSubjects();
      }
    });

    this.addcomponent.changeEdit()
  }


  deleteSubject(index: number) {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '250px',
      data: { title: 'Confirm Deletion', message: 'Are you sure you want to delete this course?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.subjects = this.subjects.filter(c => c.id !== index);

        // this.courses=this.courses.splice(index,1);
        this.updateLocalStorage();
      }
    });

    this.addcomponent.changedelete()
}

updateLocalStorage() {
  localStorage.setItem('subjects', JSON.stringify(this.subjects));
}



}
