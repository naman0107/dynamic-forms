import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-text-filed',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  templateUrl: './text-filed.component.html',
  styleUrl: './text-filed.component.scss',
})
export class TextFiledComponent {
  uniqueID = Math.floor(Math.random() * 9);
  parentContainer = inject(ControlContainer);
  @Input({ required: true }) controlKey = '';
  @Input({ required: true }) label = '';
  @Input({ required: true }) placeholder = '';

  get parentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(
      this.controlKey,
      new FormControl('', [Validators.minLength(6), Validators.required])
    );
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
