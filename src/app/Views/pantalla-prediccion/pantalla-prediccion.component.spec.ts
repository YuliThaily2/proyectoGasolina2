import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrediccionComponent } from './pantalla-prediccion.component';

describe('PantallaPrediccionComponent', () => {
  let component: PantallaPrediccionComponent;
  let fixture: ComponentFixture<PantallaPrediccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaPrediccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaPrediccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
