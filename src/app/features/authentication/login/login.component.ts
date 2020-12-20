import {Component, OnInit} from '@angular/core';
import {IUserCredentials} from '../../../@entities/IUserCredentials';
import {DispatcherService} from '../../../services/dispatcher/dispatcher.service';
import {Action} from '../../../services/dispatcher/action';
import {ActionTypes} from '../../../services/dispatcher/action-types.enum';
import {IAuthenticationResponse} from '../../../@entities/IAuthenticationResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userCredentials = {} as IUserCredentials;
  authenticationResponse = {} as IAuthenticationResponse;
  constructor(
    private dispatcherService: DispatcherService
  ) {
  }

  ngOnInit() {
  }

  submit() {
    this.dispatcherService.dispatch(new Action(ActionTypes.AUTHENTICATE, this.userCredentials)).
    subscribe(
      data => {
        console.log(data.result);
        this.authenticationResponse = data.result;
        localStorage.setItem('tokenId', this.authenticationResponse.jwt);
      });
  }

}
