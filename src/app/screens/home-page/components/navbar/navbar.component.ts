import { Component } from '@angular/core';
import { navbar } from '../../../../constants/home.contants';
import { CounterService } from '../../../../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbar = navbar;

  officeCounter: string = 'Build My Office';

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.officeCounter.subscribe(value => {
      this.officeCounter = `Build My Office (${value})`
    });
  }
}
