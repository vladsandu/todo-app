import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  resultMessage: string;
  isLoading: boolean = false;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router) { }

  onClickSubmit(value: User) {
    this.isLoading = true;
    this.authService.login(value).pipe(
      catchError(err => {
        this.resultMessage = `An error occurred: ${err}`;
        this.isLoading = false;
        return Observable.throw(err);
      })
    ).subscribe(response => {
      this.isLoading = false;
      this.resultMessage = "Login was successful!";
      const token = (response as any).token;
      localStorage.setItem("jwt", token);
      this.router.navigate(["/"]);
    });
  }
}
