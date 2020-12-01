import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEnvoieComponent } from './components/add-envoie/add-envoie.component';
import { EnvoiesComponent } from './components/envoies/envoies.component';


const routes: Routes = [
  {path: "envoies", component : EnvoiesComponent},
  {path: "add-envoie", component : AddEnvoieComponent},
  { path: "", redirectTo: "clients", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
