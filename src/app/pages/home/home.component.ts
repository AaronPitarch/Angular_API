import {Component, OnInit} from '@angular/core';
import {PersonajeService} from "../../services/personaje.service";
import {Personaje} from "../../models/PersonajeResponse";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {
  }

  ngOnInit() {
    this.getPersonajes();
  }

  private getPersonajes() {
    this.personajeService.getPersonajes().subscribe({
      next: value => {
        this.personajes = value.results;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Personajes cargados OK");
      }
    });
  }

}
