import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterService } from '../../services/counter.service';
import { DogsService } from '../../services/dogs.service';

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

  duckImage: string = '';

  constructor(
    private counterService: CounterService,
    private dogsService: DogsService
  ) {}

  ngOnInit(): void {
    this.getDogImage();
  }

  getDogImage(): void {
    this.dogsService.getDogs().subscribe(dog => {
      this.duckImage = dog;
    });
  }

  addCounter() {
    this.counterService.addCounter();
  }

  handleForm(): void {
    console.log('Handle form');
    console.log(this.userForm.valid)
    console.log(this.userForm.value);
  }
}
