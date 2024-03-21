import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateRegisterGuard } from './guards/private-register.guard';
import { registerResolver } from './resolvers/register-resolver.resolver';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'register',
    canActivate: [privateRegisterGuard],
    resolve: [registerResolver],
    loadChildren: () => import('./screens/register-page/register-page.module').then(m => m.RegisterPageModule)
  },
  {
    path: '404',
    loadChildren: () => import('./screens/error-page/error-page.module').then(m => m.ErrorPageModule)
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }