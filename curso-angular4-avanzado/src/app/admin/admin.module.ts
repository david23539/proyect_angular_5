import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { AdminRoutingModule} from "./admin-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { MainComponent} from "./components/main/main.component";
import { AddComponent} from "./components/add/add.component";
import { EditComponent} from "./components/edit/edit.component";
import { ListComponent} from "./components/list/list.component";
import { AdminGuard} from "../services/admin.guard";
import {UploadService} from "../services/upload.service";
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SearchPipe

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
