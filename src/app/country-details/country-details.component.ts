import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../countries/country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {
  @Input() country: Country | null = null;
  @Input() isEditing = false;
  @Output() editCountry = new EventEmitter<void>();
  @Output() saveCountry = new EventEmitter<Country>();
  @Output() cancelEdit = new EventEmitter<void>();
}
