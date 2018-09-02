import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  resultMessage: string;
  isLoading: boolean = false;
  returnUrl: string;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '../';
  }

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
      localStorage.setItem('currentUser', JSON.stringify(response));
      this.router.navigate([this.returnUrl]);
    });
  }
}
