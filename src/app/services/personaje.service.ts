import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersonajeResponse} from "../models/PersonajeResponse";

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  public getPersonajes(): Observable<PersonajeResponse> {
    const url = 'https://rickandmortyapi.com/api/character';
    return this.http.get<PersonajeResponse>(url);
  }
}
