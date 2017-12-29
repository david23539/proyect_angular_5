import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ModuleemailModule} from "./moduloemail/Components/moduloemail.module";
import { AdminModule} from "./admin/admin.module";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { routing, appRoutingProviders} from "./app.routing";

//componentes
import {TiendaComponent} from "./components/tienda/tienda.component";


import { AppComponent } from './app.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactoComponent } from './components/contact/contacto.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';





@NgModule({
  declarations: [
    TiendaComponent,
    ParquesComponent,
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    ContactoComponent,
    KeepersComponent,
    SimpleTinyComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModuleemailModule,
    routing,
    AdminModule,
    BrowserAnimationsModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
