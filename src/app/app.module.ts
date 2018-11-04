import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { contactReducer, messageReducer } from './store/reducers';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactFormComponent } from './components/add-contact-form/add-contact-form.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactFormComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      contacts: contactReducer,
      messages: messageReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
