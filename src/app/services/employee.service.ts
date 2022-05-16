import { Injectable } from '@angular/core';
import {IEmployee} from '../../app/interface/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployesses():  IEmployee[]{
    return [
      {code:'1',name:'mohamed',gender:'Male',dateOfBirth:'11/10/2020', annualSalary:5000},
      {code:'2',name:'alaa',gender:'Male',dateOfBirth:'11/10/2020', annualSalary:5000},
      {code:'3',name:'osman',gender:'Male',dateOfBirth:'11/10/2020', annualSalary:5000},
      {code:'4',name:'mahmoud',gender:'Male',dateOfBirth:'11/10/2020', annualSalary:5000},
      {code:'5',name:'merna',gender:'Female',dateOfBirth:'11/10/2020', annualSalary:5000},
      {code:'6',name:'arwa',gender:'Female',dateOfBirth:'11/10/2020', annualSalary:5000},
      {code:'7',name:'marwa',gender:'Female',dateOfBirth:'11/10/2020', annualSalary:5000}
    ]
    
  }
}
