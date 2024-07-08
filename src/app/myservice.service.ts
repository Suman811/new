import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
readonly apiUrl = " ";
  constructor(private http:HttpClient) { }

  getUserList(): Observable<any[]> {
    return this.http.get<any[]>("");
  }

  addUser(usr: any): Observable<any> {
    console.log(usr);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('',usr, httpOptions);
  }

  updateUser(usr: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Values/UpdateStudent/', usr, httpOptions);
  }

  deleteUser(Id: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>('https://localhost:7091/api/Values/DeleteStudent/?Id=' + Id, httpOptions);
  }

}
