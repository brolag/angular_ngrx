import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ContactActionTypes, MessageActionTypes, AddMessage } from './actions';
import { mapToExpression } from '@angular/compiler/src/render3/view/util';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  addContact$ = this.actions$.pipe(
    ofType(ContactActionTypes.ADD_CONTACT),
    map(action => ({
      type: MessageActionTypes.ADD_MESSAGE,
      payload: 'New contact added.'
    }))
  );
}
