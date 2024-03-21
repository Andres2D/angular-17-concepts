import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyComponent } from './components/property/property.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CounterService } from '../../services/counter.service';

@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule
  ],
  declarations: [
    HomePageComponent,
    NavbarComponent,
    PropertyComponent,
    ButtonComponent
  ],
  providers: [
    CounterService
  ]
})
export class HomePageModule {}
