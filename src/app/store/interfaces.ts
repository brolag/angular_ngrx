export interface Contact {
  name: string;
  email: string;
}

export interface AppState {
  readonly contacts: Contact[];
}
