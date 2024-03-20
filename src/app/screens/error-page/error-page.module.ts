import { NgModule } from "@angular/core";
import { ErrorPageComponent } from './error-page.component';
import { ErrorPageRoutingModule } from './error-page-routing.module';

@NgModule({
  imports: [
    ErrorPageRoutingModule
  ],
  declarations: [
    ErrorPageComponent,
  ],
  providers: []
})
export class ErrorPageModule {}
