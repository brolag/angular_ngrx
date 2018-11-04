import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { contactReducer, messageReducer } from './store/reducers';
import { ContactEffects } from './store/effects';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactFormComponent } from './components/add-contact-form/add-contact-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessageAlertComponent } from './components/message-alert/message-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactFormComponent,
    ContactComponent,
    MessageAlertComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      contacts: contactReducer,
      messages: messageReducer
    }),
    EffectsModule.forRoot([ContactEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
