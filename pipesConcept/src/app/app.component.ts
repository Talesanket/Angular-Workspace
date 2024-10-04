import { Component } from '@angular/core';

interface Student {
  name: string;
  age: number;
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
  title = 'pipesConcept';

  today: Date = new Date();
  price: number = 1500.567;
  percentValue: number = 0.45;
  text: string = 'Angular Pipes Example';
  jsonObject = { name: 'John', age: 30, city: 'New York' };
  numbersArray = [1, 2, 3, 4, 5, 6];
  customString: string = 'Custom pipe example!';

  name: string = 'John';
  gender: string = 'male';


  genderMap = {
    male: 'Mr. John',
    female: 'Ms. John',
    other: 'Mx. John',
    unknown: 'Friend'
  };
  changeGender(gender: string) {
    this.gender = gender;
  }
  students: Student[] = [];

  // Variables to bind to the form inputs
  studentName: string = '';
  studentAge: number | null = null;
  studentDob: Date | null = null;
  studentCity: string = '';
  studentGender: string = '';  // New field for gender
  studentBatchNo: number | null = null;  // New field for batch number

  // Method to add student to the array
  addStudent() {
    if (
      this.studentName &&
      this.studentAge &&
      this.studentDob &&
      this.studentCity &&
      this.studentGender &&
      this.studentBatchNo
    ) {
      const newStudent: Student = {
        name: this.studentName,
        age: this.studentAge,
        dob: this.studentDob,
        city: this.studentCity,
        gender: this.studentGender,  // Add gender to student object
        batchNo: this.studentBatchNo  // Add batch number to student object
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
    this.studentAge = null;
    this.studentDob = null;
    this.studentCity = '';
    this.studentGender = '';
    this.studentBatchNo = null;
  }
}
