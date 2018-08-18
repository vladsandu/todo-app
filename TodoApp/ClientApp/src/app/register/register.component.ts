import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  resultMessage: string;
  isLoading: boolean = false;

  constructor(private readonly authService: AuthenticationService) { }

  onClickSubmit(value: User) {
    this.isLoading = true;
    this.authService.register(value).pipe(
      catchError(err => {
        this.resultMessage = `An error occurred: ${err}`;
        this.isLoading = false;
        return Observable.throw(err);
      })
    ).subscribe(value => {
      this.isLoading = false;
      this.resultMessage = "Registration was successful!";
    });
  }
}
