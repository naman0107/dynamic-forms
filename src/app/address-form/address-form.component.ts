import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextFiledComponent } from '../shared/text-filed/text-filed.component';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [ReactiveFormsModule, TextFiledComponent],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent implements OnInit {
  registerationForm!: FormGroup;

  ngOnInit(): void {
    this.initializeRegisterationForm();
  }

  initializeRegisterationForm(): void {
    this.registerationForm = new FormGroup({
      password: new FormControl('', [Validators.minLength(6)]),
      city: new FormControl(''),
      state: new FormControl('Texas'),
      zip: new FormControl(''),
    });
  }

  submit(): void {
    this.registerationForm.markAllAsTouched();
    console.log(this.registerationForm.value);
  }
}
