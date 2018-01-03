import { ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

//TODO componentes routing
import {TiendaComponent} from "./components/tienda/tienda.component";
import { ParquesComponent} from "./components/parques/parques.component"
import {HomeComponent} from "./components/home/home.component";
import {ContactoComponent} from "./components/contact/contacto.component";
import {AnimalsComponent} from "./components/animals/animals.component";
import {KeepersComponent} from "./components/keepers/keepers.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent} from "./components/user-edit/user-edit.component";

const appRoutes : Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '', redirectTo : 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'parques', component: ParquesComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'keepers', component: KeepersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: '**', component: HomeComponent}

];

export const  appRoutingProviders: any[] = [];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
