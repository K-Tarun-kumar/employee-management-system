package com.employeeManagement.system.controller;

import com.employeeManagement.system.entity.Employee;
import com.employeeManagement.system.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public Map<String,String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Employee deleted successfully");
        return response;
    }

}
