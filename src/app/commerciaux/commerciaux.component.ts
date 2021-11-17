import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commerciaux',
  templateUrl: './commerciaux.component.html',
  styleUrls: ['./commerciaux.component.scss']
})
export class CommerciauxComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToForm(){
    this.route.navigate(['/formcom']);
  }

}
