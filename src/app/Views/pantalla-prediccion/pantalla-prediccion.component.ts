import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantalla-prediccion',
  templateUrl: './pantalla-prediccion.component.html',
  styleUrl: './pantalla-prediccion.component.css'
})
export class PantallaPrediccionComponent {
  year: string;
  state: string;
  gasolina: string;

  constructor(private route: ActivatedRoute) {
    this.year = '';
    this.state = '';
    this.gasolina = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const yearParam = params.get('year');
      const stateParam = params.get('state');
      const gasolinaParam = params.get('gasolina');

      if (yearParam !== null) {
        this.year = yearParam;
      }
      if (stateParam !== null) {
        this.state = stateParam;
      }
      if (gasolinaParam !== null) {
        this.gasolina = gasolinaParam;
      }
    });
  }
}
