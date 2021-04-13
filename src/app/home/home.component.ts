import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';
import { Dato } from '../dato.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dati: Dato[];

  constructor(private datiService: DatiService) { }

  ngOnInit(): void {
    this.dati = this.datiService.getDati();
  }

  getDati(){
     
  }

}
