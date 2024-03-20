import { NgModule } from "@angular/core";
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyComponent } from './components/property/property.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule
  ],
  declarations: [
    HomePageComponent,
    NavbarComponent,
    PropertyComponent,
  ],
  providers: []
})
export class HomePageModule {}
