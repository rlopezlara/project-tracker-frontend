import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [ // List of modules available for my components/services to use
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // to bind html fields with component variables
  ],
  providers: [ProjectService],// list of data providers
  bootstrap: [ProjectComponent]//initial component
})
export class AppModule { }
