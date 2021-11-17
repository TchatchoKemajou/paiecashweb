import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commerciaux } from '../Models/commerciaux';
import { CommrciauxdataService } from '../Services/commrciauxdata.service';

@Component({
  selector: 'app-formcommerciaux',
  templateUrl: './formcommerciaux.component.html',
  styleUrls: ['./formcommerciaux.component.scss']
})
export class FormcommerciauxComponent implements OnInit {

  commerciaux: any;
  commercial = new Commerciaux();
  currentUserId = 'admin';

  constructor(private commservice:CommrciauxdataService) { }

  ngOnInit(): void {
  }


    saveCommercial(comform: NgForm){
      this.commservice.insertData(this.commercial, this.currentUserId).subscribe(res => {
        console.log('enregistrement reussit');
     });
  }
}
