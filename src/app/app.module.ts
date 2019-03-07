import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headercomponent } from './header/app.headercomponent';
import { TestpipePipe } from './testpipe.pipe';
import { FormsModule }   from '@angular/forms';


@NgModule({

  declarations: [
    AppComponent,headercomponent, TestpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
