import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DogsService } from './services/dogs.service';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [DogsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
