import { Action } from '@ngrx/store';
import { Contact, Message } from './interfaces';
import {
  ContactActions,
  ContactActionTypes,
  MessageActionTypes,
  AddMessage
} from './actions';

export function contactReducer(state: Contact[] = [], action: ContactActions) {
  console.log('STORE', state);
  switch (action.type) {
    case ContactActionTypes.ADD_CONTACT:
      return [...state, action.payload];

    case ContactActionTypes.REMOVE_CONTACT:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}

export function messageReducer(state: Message[] = [], action: AddMessage) {
  switch (action.type) {
    case MessageActionTypes.ADD_MESSAGE:
      return [...state, action.payload];

    default:
      return state;
  }
}
