import { Component, OnInit } from '@angular/core';
import { IClient } from '../Models/client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Clients: IClient[] = [
    {
      clientID: '1',
      clientName: 'Constantin',
      clientPhone: '649646456',
      clientStatus: false,
      clientProfil: 'assets/logo.png'
    },
    {
      clientID: '2',
      clientName: 'Romaric',
      clientPhone: '65496945',
      clientStatus: true,
      clientProfil: 'assets/logo.png'
    },
    {
      clientID: '3',
      clientName: 'Dilan',
      clientPhone: '65496945',
      clientStatus: true,
      clientProfil: 'assets/logo.png'
    },
    {
      clientID: '4',
      clientName: 'Julio',
      clientPhone: '135546458',
      clientStatus: false,
      clientProfil: 'assets/logo.png'
    }
  ]

  public ifActif(statut: boolean): string{
    if(statut == true){
      return 'Activer';
    }else{
      return 'Desactiver';
    }
  }


}
