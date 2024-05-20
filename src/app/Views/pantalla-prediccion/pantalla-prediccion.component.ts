import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-pantalla-prediccion',
  templateUrl: './pantalla-prediccion.component.html',
  styleUrl: './pantalla-prediccion.component.css'
})
export class PantallaPrediccionComponent implements OnInit{
  year: string;
  month: string;
  state: string;
  gasolina: string;
  prediccion: number | null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.year = '';
    this.month = '';
    this.state = '';
    this.gasolina = '';
    this.prediccion = null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const yearParam = params.get('year');
      const monthParam = params.get('month');
      const stateParam = params.get('state');
      const gasolinaParam = params.get('gasolina');

      if (yearParam !== null) {
        this.year = yearParam;
      }
      if (monthParam !== null) {
        this.month = monthParam;
      }
      if (stateParam !== null) {
        this.state = stateParam;
      }
      if (gasolinaParam !== null) {
        this.gasolina = gasolinaParam;
      }
    this.getPrediction;
    });
  }

  async getPrediction() {
    try {
      const response = await firstValueFrom(this.http.post<{ Predicción: number }>('http://localhost:5000/prediccion', {
        Ciudad: this.state, // Cambia 'Estado' por 'Ciudad' según el orden especificado
        TipoGasolina: this.gasolina, // Agrega el tipo de gasolina antes del año y mes
        Año: parseInt(this.year, 10),
        Mes: parseInt(this.month, 10) // Envía el número del mes como un número entero
      }));
      this.prediccion = response.Predicción;
  
      // Imprimir la predicción en la consola
      console.log('Predicción obtenida:', this.prediccion);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  }
    
  
}
