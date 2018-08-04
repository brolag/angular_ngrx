import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState, Contact } from "../../store/interfaces";
import { RemoveContact } from "../../store/actions";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Input() index: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  removeContact() {
    this.store.dispatch(new RemoveContact(this.index));
  }
}
