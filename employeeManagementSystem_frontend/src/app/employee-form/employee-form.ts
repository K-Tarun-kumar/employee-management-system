import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../service/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  @Output() employeeAdded = new EventEmitter<void>();

  employee= {
    name:'',
    email:'',
    salary:'',
    department:'',
  
  }

  constructor(private service : EmployeeService){}
  
  saveEmployee() {
    console.log("Submitting");
    this.service.createEmployee(this.employee).subscribe(() =>{
      alert("Employee added successfully");
      this.employee = {
        name: '',
        email: '',
        salary:'',
        department: ''

      };
      this.employeeAdded.emit();
    }

    );
  }
  
}
