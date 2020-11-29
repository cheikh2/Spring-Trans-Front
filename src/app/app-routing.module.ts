import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddEnvoieComponent } from './components/add-envoie/add-envoie.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EnvoiesComponent } from './components/envoies/envoies.component';


const routes: Routes = [
  {path: "clients", component : ClientsComponent},
  {path: "add-client", component : AddClientComponent},
  {path: "envoies", component : EnvoiesComponent},
  {path: "add-envoie", component : AddEnvoieComponent},
  { path: "", redirectTo: "clients", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
