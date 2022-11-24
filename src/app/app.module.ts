import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OptionsComponent } from './options/options.component';
import { AddformComponent } from './addform/addform.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { DeleteformComponent } from './deleteform/deleteform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OptionsComponent,
    AddformComponent,
    UpdateformComponent,
    DeleteformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }