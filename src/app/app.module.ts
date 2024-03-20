import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
