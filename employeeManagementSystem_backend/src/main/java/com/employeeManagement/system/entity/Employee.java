package com.employeeManagement.system.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="employee")
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //generates sequence
    private Long id;
    private String name;
    private String email;
    private String salary;
    private String department;

}
