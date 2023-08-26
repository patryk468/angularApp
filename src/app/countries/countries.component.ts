import { Component, OnInit } from '@angular/core';
import { Country } from '../countries/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [
    { id: 1, name: 'Polska', capital: 'Warszawa', population: 38000000 },
    { id: 2, name: 'Niemcy', capital: 'Berlin', population: 83000000 },
    { id: 3, name: 'Francja', capital: 'Paryż', population: 67000000 },
    { id: 4, name: 'Włochy', capital: 'Rzym', population: 60000000 },
    { id: 5, name: 'Hiszpania', capital: 'Madryt', population: 47000000 }
  ];

  selectedCountry: Country | null = null;
  isEditing = false;

  constructor() {}

  ngOnInit(): void {}

 editCountry(country: Country) {
    this.selectedCountry = { ...country };
    this.isEditing = true;
  }

  onEditCountry() {
    this.isEditing = true;
  }

   onSaveCountry(updatedCountry: Country) {
    if (this.selectedCountry) {
      const index = this.countries.findIndex(country => country.id === this.selectedCountry!.id);
      if (index !== -1) {
        this.countries[index] = updatedCountry;
      }
      this.onCancelEdit();
    }
  }

  onCancelEdit() {
    this.isEditing = false;
    this.selectedCountry = null;
  }
}
