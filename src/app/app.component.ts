import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrPersonajes: any[];
  paginaActual: number;
  numPages: number;

  constructor(private personajesservice: PersonajesService) {
    this.paginaActual = 1;
  }

  ngOnInit() {
    this.personajesservice.getAll()
      .then(response => {
        this.arrPersonajes = response['results'];
        this.numPages = response['info']['pages'];
      })
  }

async changePage(siguiente) {
    if (siguiente) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
   const response = await this.personajesservice.getAll(this.paginaActual);
   this.arrPersonajes=response['results'];
  }

}
