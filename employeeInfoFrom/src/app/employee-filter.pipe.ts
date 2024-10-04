import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './emp-from/emp-from.component';  // Import Employee type or define it here

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], searchText: string): Employee[] {
    // If there are no employees or no searchText, return the employees array unchanged
    if (!employees || !searchText) {
      return employees;
    }

    // Convert searchText to lowercase for case-insensitive search
    searchText = searchText.toLowerCase();

    // Filter employees based on the searchText matching employee name or department
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchText) ||
      employee.department.toLowerCase().includes(searchText)
    );
  }
}
