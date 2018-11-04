import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Contact } from '../store/interfaces';

export enum ContactActionTypes {
  ADD_CONTACT = 'ADD_CONTACT',
  REMOVE_CONTACT = 'REMOVE_CONTACT'
}

export enum MessageActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE'
}

export class AddContact implements Action {
  readonly type = ContactActionTypes.ADD_CONTACT;
  constructor(public payload: Contact) {}
}

export class RemoveContact implements Action {
  readonly type = ContactActionTypes.REMOVE_CONTACT;
  constructor(public payload: number) {}
}

export class AddMessage implements Action {
  readonly type = MessageActionTypes.ADD_MESSAGE;
  constructor(public payload: Contact) {}
}

export type ContactActions = AddContact | RemoveContact;
