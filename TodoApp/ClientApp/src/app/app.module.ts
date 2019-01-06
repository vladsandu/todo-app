import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { TodoItemService } from "./services/todoitem.service";
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemInserterComponent } from './todo-item-inserter/todo-item-inserter.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeLayoutComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoItemInserterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        children: [
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: '' } // otherwise redirect to home
    ])
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    TodoItemService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  entryComponents: [LogoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
