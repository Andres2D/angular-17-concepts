import { NgModule } from "@angular/core";
import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page.component';
import { DogsService } from '../../services/dogs.service';

@NgModule({
  imports: [
    RegisterPageRoutingModule
  ],
  declarations: [
    RegisterPageComponent,
  ],
  providers: [
    DogsService
  ]
})
export class RegisterPageModule {}
