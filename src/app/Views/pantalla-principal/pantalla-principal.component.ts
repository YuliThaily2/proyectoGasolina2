import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrl: './pantalla-principal.component.css'
})

export class PantallaPrincipalComponent {
  selectedYear: string;
  selectedState: string;
  selectedGasolina: string;

  constructor(private router: Router){
    this.selectedYear= '10';
    this.selectedState = 'As';
    this.selectedGasolina = 'Ma';

  }

  ngOnInit() {
    // Asignar la primera opción por defecto
    this.selectedYear = this.arrFecha[0];
    this.selectedState = this.estadosMexico[0];
    this.selectedGasolina = this.arrGasolina[0];
  }

  arrFecha = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
  ];

  arrGasolina = [
    'Gasolina Magna',
    'Gasolina Premium',  
  ];

  estadosMexico = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Ciudad de México',
    'Coahuila',
    'Colima',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'México',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ];

  onSubmit() {
    this.router.navigate(['/PantallaPrediccion', { year: this.selectedYear, state: this.selectedState, gasolina: this.selectedGasolina }]);
    console.log(this.selectedYear)
    console.log(this.selectedState)
    console.log(this.selectedGasolina)

  }
  
}
