import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {
 employees = [
    { empNumber: 20886570, fullname: 'Clarence Mica Joy Tolentino', gender: 'Female', email: 'cgtolentino20@gmail.com', employmentStatus: 'Active', salary:  75000 },
    { empNumber: 20684558, fullname: 'Coleen Isobelle Masbang', gender: 'Female', email: 'cimasbang25@gmail.com', employmentStatus: 'Inactive', salary: 45000 },
    { empNumber: 20943657, fullname: 'Alyssa Evangelista', gender: 'Female', email: 'aevangelista17@gmail.com', employmentStatus: 'Active', salary: 80000 },
    { empNumber: 20113645, fullname: 'Lianne Ashley Reyes', gender: 'Female', email: 'lareyes@gmail.com4@example.com', employmentStatus: 'Active', salary: 67000 },
  ];
}