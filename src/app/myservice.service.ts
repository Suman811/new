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
    return this.http.get<any[]>("https://localhost:7265/api/User/GetDetails");
  }

  addUser(usr: any): Observable<any> {
    console.log(usr);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>('https://localhost:7265/api/User/AddUser',usr, httpOptions);
  }

  updateUser(usr: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>('https://localhost:7265/api/User/UpdateUser', usr, httpOptions);
  }

  deleteUser(Id: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>('https://localhost:7265/api/User/DeleteUser?id=' + Id, httpOptions);
  }
  Validate(data:any): Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put<any>('https://localhost:7265/api/User/ValidateUser',data.httpOptions );
  }

}
