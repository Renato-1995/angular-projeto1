import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAutomoveisComponent } from './list-automoveis/list-automoveis.component';
import { AddAutomovelComponent } from './add-automovel/add-automovel.component';
import { AutomovelService } from './automovel.service';

@NgModule({
  declarations: [
    AppComponent,
    ListAutomoveisComponent,
    AddAutomovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AutomovelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
