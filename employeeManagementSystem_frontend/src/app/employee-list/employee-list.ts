import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  employees: any[]=[];
  constructor (private service: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getAll().subscribe(data => {
       this.employees = data;
    });
  }

  deleteEmployee(id : number) {
    this.service.deleteEmployee(id).subscribe(() =>{
      alert("Deleted successfully");
      this.loadEmployees();
    });

  }


}
