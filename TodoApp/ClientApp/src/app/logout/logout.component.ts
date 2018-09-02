import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from "@angular/router";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private readonly authService: AuthenticationService,
    public activeModal: NgbActiveModal,
    private readonly router: Router) { }
  
  logout() {
    this.authService.logout();
    this.closeModal();
    this.router.navigate(['../login']);
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
