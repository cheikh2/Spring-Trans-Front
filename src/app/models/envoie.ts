export interface Envoie{
  id:number;
  //dateEnvoi: Date;
  montant: number;
  emetteur?: any; 
  recepteur?: any;
  prenomEme?:string;
  nomEme?:string;
  telephoneEme?:string;
  cni?:string;
  prenomRec?:string;
  nomRec?:string;
  telephoneRec?:string;
}
