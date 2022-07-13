import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Environment } from 'src/environments/environment';
import { RestService } from '../rest-service';

@Component({
  selector: 'app-login-pending',
  templateUrl: './login-pending.component.html',
  styleUrls: ['./login-pending.component.css']
})
export class LoginPendingComponent implements OnInit{

  private regUrl: string = Environment.getRegistrationHost + '/';

  @Input()
  username: string;
  
  @Output()
  pendingFlag = new EventEmitter<boolean>();;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
      
  }

  resendToken(): void {
    
  }

  back(): void {
    this.pendingFlag.emit(false);
  }

}
