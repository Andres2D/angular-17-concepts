import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  userForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });

  constructor(
    private counterService: CounterService
  ) {}

  addCounter() {
    this.counterService.addCounter();
  }

  handleForm(): void {
    console.log('Handle form');
    console.log(this.userForm.valid)
    console.log(this.userForm.value);
  }
}
