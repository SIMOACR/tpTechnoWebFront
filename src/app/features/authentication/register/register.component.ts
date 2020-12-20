import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../@entities/IUser';
import {Action} from '../../../services/dispatcher/action';
import {ActionTypes} from '../../../services/dispatcher/action-types.enum';
import {DispatcherService} from '../../../services/dispatcher/dispatcher.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {} as IUser;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dispatcherService: DispatcherService
  ) {
  }

  ngOnInit() {
  }

  submit() {
    this.dispatcherService.dispatch(new Action(ActionTypes.ADD_USER, this.user))
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      data => {
      });
  }

}
