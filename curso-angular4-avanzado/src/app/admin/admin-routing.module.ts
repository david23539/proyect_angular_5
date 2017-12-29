import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";


//Componentes
import { MainComponent} from "./components/main/main.component";
import { AddComponent} from "./components/add/add.component";
import { EditComponent} from "./components/edit/edit.component";
import { ListComponent} from "./components/list/list.component";

const adminRoutes : Routes = [
  {
    path:  'admin-panel',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'listado', pathMatch: 'full'},
      {path: 'listado', component: ListComponent},
      {path: 'editar', component: EditComponent},
      {path: 'añadir', component: AddComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]

})
export class AdminRoutingModule { }
