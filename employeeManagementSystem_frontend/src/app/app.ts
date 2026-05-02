import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeForm } from './employee-form/employee-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeList, EmployeeForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employeeManagementSystem');

  @ViewChild(EmployeeList) employeeList? : EmployeeList;

  reloadTable() {
    console.log("reloading tables");
    console.log(this.employeeList);
  this.employeeList?.loadEmployees();
}
}

