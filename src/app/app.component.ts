import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ui-interface';

  users: any = [
    {
      name: 'John',
      age: 25,
      country: 'USA',
      gender: 'Male',
      mobile_number: '1234567890',
    },
    {
      name: 'Alice',
      age: 30,
      country: 'Canada',
      gender: 'Female',
      mobile_number: '9876543210',
    },
    {
      name: 'Bob',
      age: 28,
      country: 'UK',
      gender: 'Male',
      mobile_number: '5551234567',
    },
    {
      name: 'Eva',
      age: 22,
      country: 'Germany',
      gender: 'Female',
      mobile_number: '8765432109',
    },
    {
      name: 'David',
      age: 35,
      country: 'Australia',
      gender: 'Male',
      mobile_number: '1122334455',
    },
    {
      name: 'Sophia',
      age: 27,
      country: 'France',
      gender: 'Female',
      mobile_number: '9988776655',
    },
    {
      name: 'Michael',
      age: 32,
      country: 'Spain',
      gender: 'Male',
      mobile_number: '6655443322',
    },
    {
      name: 'Lily',
      age: 26,
      country: 'Italy',
      gender: 'Female',
      mobile_number: '2233445566',
    },
    {
      name: 'Alex',
      age: 29,
      country: 'Brazil',
      gender: 'Male',
      mobile_number: '7788990011',
    },
    {
      name: 'Grace',
      age: 31,
      country: 'Japan',
      gender: 'Female',
      mobile_number: '4455667788',
    },
  ];
}
