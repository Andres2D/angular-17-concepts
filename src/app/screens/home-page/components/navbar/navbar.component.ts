import { Component } from '@angular/core';
import { navbar } from '../../../../constants/home.contants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbar = navbar;
}
