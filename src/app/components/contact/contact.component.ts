import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "../../store/interfaces";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {}

  ngOnInit() {}
}
