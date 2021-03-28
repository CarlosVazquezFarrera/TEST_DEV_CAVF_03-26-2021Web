import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { SessionServiceService } from '../services/session-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoggedguardGuard implements CanActivate {
  
  constructor(private sessionService: SessionServiceService,
    private router: Router) {
  }
  canActivate(): boolean {
    if (this.sessionService.isUserLogged()){
      return true;
    }
    else{
      this.router.navigateByUrl('login');
      return false;
    }
  }
  
}
