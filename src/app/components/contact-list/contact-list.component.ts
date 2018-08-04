import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState, Contact } from "../../store/interfaces";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  public contacts: Observable<Contact[]>;

  constructor(private store: Store<AppState>) {
    this.contacts = store.select("contacts");
  }

  ngOnInit() {}
}
