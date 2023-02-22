import {Component, OnInit} from '@angular/core';
import {PersonajeService} from "../../services/personaje.service";
import {Personaje} from "../../models/PersonajeResponse";
import {MatDialog} from "@angular/material/dialog";
import {EliminarComponent} from "../../dialog/eliminar/eliminar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService, private dialog: MatDialog) {
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

  deletePersonaje(name: string): void {
    const dialogRef = this.dialog.open(EliminarComponent, {
      data: name
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true) {
        this.personajes = this.personajes.filter(p => p.name !== name);
      }
    });
  }
}
