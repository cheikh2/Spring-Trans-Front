import { EnvoieService } from './../../services/envoie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envoies',
  templateUrl: './envoies.component.html'
})
export class EnvoiesComponent implements OnInit {
  envoies: any;
  constructor(private envoieService:EnvoieService) { }

  ngOnInit(): void {
    this.readEnvoies();
  }

  readEnvoies(): void {
    this.envoieService.getEnvoies()
      .subscribe(
        envoies => {
          this.envoies = envoies;
          console.log(envoies);
        },
        error => {
          console.log(error);
        });
  }

}
