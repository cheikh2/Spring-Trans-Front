import { Envoie } from './../../models/envoie';
import { EnvoieService } from './../../services/envoie.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-envoie',
  templateUrl: './add-envoie.component.html'
})
export class AddEnvoieComponent implements OnInit {

  form: FormGroup;
  constructor(private envoieService:EnvoieService, private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      montant: new FormControl('', [Validators.required]),
      prenomEme: new FormControl('', Validators.required),
      nomEme: new FormControl('', Validators.required),
      telephoneEme: new FormControl('', Validators.required),
      cni: new FormControl('', Validators.required),
      prenomRec: new FormControl('', Validators.required),
      nomRec: new FormControl('', Validators.required),
      telephoneRec: new FormControl('', Validators.required),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    let e= {} as Envoie;

      e.emetteur = {
        prenomEme:this.form.value.prenomEme,
        nomEme:this.form.value.nomEme,
        telephoneEme:this.form.value.telephoneEme,
        cni:this.form.value.cni
      }

      e.recepteur = {
        prenomRec:this.form.value.prenomRec,
        nomRec:this.form.value.nomRec,
        telephoneRec:this.form.value.telephoneRec
      }

    console.log(this.form.value);
    this.envoieService.postEnvoie(e).subscribe(res => {
         console.log('Envoie created successfully!');
         this.router.navigateByUrl('/envoies');
    })
  }
}

