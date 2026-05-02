import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor (private http:HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createEmployee(employee : any) {
    return this.http.post(this.baseUrl, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
