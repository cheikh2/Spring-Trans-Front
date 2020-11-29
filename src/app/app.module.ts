import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EnvoiesComponent } from './components/envoies/envoies.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddEnvoieComponent } from './components/add-envoie/add-envoie.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    EnvoiesComponent,
    AddClientComponent,
    AddEnvoieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
