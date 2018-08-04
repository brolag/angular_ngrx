import { Action } from "@ngrx/store";
import { Contact } from "./interfaces";
import { ContactActions, ContactActionTypes } from "./actions";

export function contactReducer(state: Contact[] = [], action: ContactActions) {
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
