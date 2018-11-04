export interface Contact {
  name: string;
  email: string;
}

export interface Message {
  message: string;
}

export interface AppState {
  readonly contacts: Contact[];
  readonly messages: Message[];
}
