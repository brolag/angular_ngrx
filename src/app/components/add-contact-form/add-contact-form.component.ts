import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState, Contact } from "../../store/interfaces";
import { AddContact } from "../../store/actions";

@Component({
  selector: "app-add-contact-form",
  templateUrl: "./add-contact-form.component.html",
  styleUrls: ["./add-contact-form.component.css"]
})
export class AddContactFormComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addContact(name: string, email: string) {
    this.store.dispatch(new AddContact({ name, email }));
  }

  ngOnInit() {}
}
