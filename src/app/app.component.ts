import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddressFormComponent, PersonalInfoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
