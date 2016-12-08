import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DivNodeComponent } from './div-node/div-node.component';
import { LayoutComponent } from './layout/layout.component';
import { LoadComponent } from './load/load.component';
import { Safe } from './style-pipe';

@NgModule({
  declarations: [
    AppComponent,
    DivNodeComponent,
    LayoutComponent,
    LoadComponent,
    Safe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
