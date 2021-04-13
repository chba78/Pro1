import { Injectable } from '@angular/core';
import { Dato } from './dato.model';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  dati: Dato[] = [
    {datos: 'Primo', daton: 1, datod: new Date('2021-01-01T01:01:01.932Z'), datob: true},
    {datos: 'Secondo', daton: 2, datod: new Date('2021-01-02T01:01:02.932Z'), datob: false},
    {datos: 'Terzo', daton: 3, datod: new Date('2021-01-03T01:01:03.932Z'), datob: true},
  ];

  constructor() { }

  getDati() {
    return this.dati;
  }

  postDato (dato: Dato){

  }

  deleteDato (id: number){

  }
}
