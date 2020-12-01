import { EnvoieService } from './../../services/envoie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-envoie',
  templateUrl: './add-envoie.component.html'
})
export class AddEnvoieComponent implements OnInit {

  envoie = {
    montant: '', prenomEme: '', nomEme: '', telephoneEme: '',
    cni: '', prenomRec: '', nomRec: '', telephoneRec: '',
    available: false
  };

  submitted = false;
  constructor(private envoieService:EnvoieService, private router:Router) { }

  ngOnInit(): void {

  }

  onSaveEnvoie(): void {
    const data = {
      montant: this.envoie.montant, prenomEme: this.envoie.prenomEme, nomEme: this.envoie.nomEme,
      telephoneEme: this.envoie.telephoneEme, cni: this.envoie.cni, prenomRec: this.envoie.prenomRec,
      nomRec: this.envoie.nomRec, telephoneRec: this.envoie.telephoneRec,
    };

    this.envoieService.postEnvoie(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEnvoie(): void {
    this.submitted = false;
    this.envoie = {
      montant: '', prenomEme: '', nomEme: '', telephoneEme: '', cni: '',
      prenomRec: '', nomRec: '', telephoneRec: '',
      available: false
    };
  }

}

