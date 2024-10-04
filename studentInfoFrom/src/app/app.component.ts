import { Component } from '@angular/core';

interface Student {
  name: string;

  dob: Date;
  city: string;
  gender: string;
  batchNo: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentInfoForm'; // Corrected typo in title

  students: Student[] = [];

  // Variables to bind to the form inputs
  studentName: string = '';

  studentDob: Date | null = null;
  studentCity: string = '';
  studentGender: string = '';
  studentBatchNo: number | null = null;

  // Method to add student to the array
  addStudent() {
    if (
      this.studentName &&

      this.studentDob &&
      this.studentCity &&
      this.studentGender &&
      this.studentBatchNo !== null
    ) {
      const newStudent: Student = {
        name: this.studentName,

        dob: this.studentDob,
        city: this.studentCity,
        gender: this.studentGender,
        batchNo: this.studentBatchNo
      };

      // Push the new student into the array
      this.students.push(newStudent);
      this.clearForm();
    } else {
      alert('Please fill out all fields');
    }
  }

  // Method to clear the form after adding a student
  clearForm() {
    this.studentName = '';

    this.studentDob = null;
    this.studentCity = '';
    this.studentGender = '';
    this.studentBatchNo = null;
  }
}
