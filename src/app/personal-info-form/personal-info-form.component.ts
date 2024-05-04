import { Component } from '@angular/core';
import { TextFiledComponent } from '../shared/text-filed/text-filed.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-info-form',
  standalone: true,
  imports: [ReactiveFormsModule, TextFiledComponent],
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.scss',
})
export class PersonalInfoFormComponent {
  shippingForm!: FormGroup;

  ngOnInit(): void {
    this.initializeShippingForm();
  }

  initializeShippingForm(): void {
    this.shippingForm = new FormGroup({
      gender: new FormControl('Male'),
    });
  }

  submit(): void {
    this.shippingForm.markAllAsTouched();
    console.log(this.shippingForm.value);
  }
}
