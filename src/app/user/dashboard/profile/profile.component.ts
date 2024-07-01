import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  formdata : any;
  ngOnInit(): void {
    this.formdata= JSON.parse(localStorage.getItem('formdata')||'')
  }
}
