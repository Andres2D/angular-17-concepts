import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyComponent } from './components/property/property.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CounterService } from '../../services/counter.service';
import { DogsService } from '../../services/dogs.service';

@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePageComponent,
    NavbarComponent,
    PropertyComponent,
    ButtonComponent
  ],
  providers: [
    CounterService,
    DogsService
  ]
})
export class HomePageModule {}
