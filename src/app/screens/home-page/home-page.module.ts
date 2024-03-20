import { NgModule } from "@angular/core";
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyComponent } from './components/property/property.component';

@NgModule({
  imports: [
    HomePageRoutingModule
  ],
  declarations: [
    HomePageComponent,
    NavbarComponent,
    PropertiesComponent,
    PropertyComponent,
  ],
  providers: []
})
export class HomePageModule {}
