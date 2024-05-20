import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrl: './pantalla-principal.component.css'
})

export class PantallaPrincipalComponent {
  selectedYear: string;
  selectedMes: string;
  selectedState: string;
  selectedGasolina: string;

  constructor(private router: Router){
    this.selectedYear= '';
    this.selectedMes = '';
    this.selectedState = '';
    this.selectedGasolina = '';

  }

  ngOnInit() {
    // Asignar la primera opción por defecto
    this.selectedYear = this.arrFecha[0];
    this.selectedState = this.estadosMexico[0];
    this.selectedGasolina = this.arrGasolina[0];
  }

  // meses: string[] = [
  //   'Enero',
  //   'Febrero',
  //   'Marzo',
  //   'Abril',
  //   'Mayo',
  //   'Junio',
  //   'Julio',
  //   'Agosto',
  //   'Septiembre',
  //   'Octubre',
  //   'Noviembre',
  //   'Diciembre'
  // ];

  meses: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];
  

  arrFecha = [
    '2030',
    '2029',
    '2028',
    '2027',
    '2026',
    '2025',
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
    'Gasolina de alto octanaje', 
    'Gasolina de bajo octanaje'  
  ];

  estadosMexico = [
    'Acapulco, Gro.','Aguascalientes, Ags.','Atlacomulco, Edo. de Méx.','Campeche, Camp.',
            'Cancún, Q. Roo.','Cd. Acuña, Coah.','Cd. Juárez, Chih.','Chetumal, Q. Roo.','Chihuahua, Chih.','Coatzacoalcos, Ver.','Colima, Col.','Cortazar, Gto.',
            'Cuernavaca, Mor.','Culiacán, Sin.','Córdoba, Ver.','Durango, Dgo.','Esperanza, Son.','Fresnillo, Zac.',
            'Guadalajara, Jal.','Hermosillo, Son.','Huatabampo, Son.','Iguala, Gro.','Izúcar de Matamoros, Pue.',
            'Jacona, Mich.','Jiménez, Chih.','La Paz, B.C.S.',
'León, Gto.',
'Matamoros, Tamps.',
'Mexicali, B.C.',
'Monclova, Coah.',
'Monterrey, N.L.',
'Morelia, Mich.',
'Mérida, Yuc.',
'Oaxaca, Oax.',
'Pachuca, Hgo.',
'Puebla, Pue.',
'Querétaro, Qro.',
'Saltillo, Coah.',
'San Andrés Tuxtla, Ver.',
'San Luis Potosí, S.L.P.',
'Tampico, Tamps.',
'Tapachula, Chis.',
'Tehuantepec, Oax.',
'Tepatitlán, Jal.',
'Tepic, Nay.',
'Tijuana, B.C.',
'Tlaxcala, Tlax.',
'Toluca, Edo. de Méx.',
'Torreón, Coah.',
'Tulancingo, Hgo.',
'Tuxtla Gutiérrez, Chis.',
'Veracruz, Ver.',
'Villahermosa, Tab.',
'Zacatecas, Zac.',
'Área Met. de la Cd. de México'
  ];

  onSubmit() {
    this.router.navigate(['/PantallaPrediccion', { year: this.selectedYear, month: this.selectedMes, state: this.selectedState, gasolina: this.selectedGasolina }]);    console.log(this.selectedYear)
    console.log(this.selectedMes)
    console.log(this.selectedState)
    console.log(this.selectedGasolina)

  }
  
}
