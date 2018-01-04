import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { AdminRoutingModule} from "./admin-routing.module";

import { MainComponent} from "./components/main/main.component";
import { AddComponent} from "./components/add/add.component";
import { EditComponent} from "./components/edit/edit.component";
import { ListComponent} from "./components/list/list.component";
import { AdminGuard} from "../services/admin.guard";
import {UploadService} from "../services/upload.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  providers:[AdminGuard,
      UploadService]

})
export class AdminModule { }
