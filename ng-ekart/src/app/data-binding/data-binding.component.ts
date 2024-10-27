import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
/*
  Flow of data from Component Class to View Template and View Template to Component Class is known as Data Binding.
  Type of Data Binding:
    One way Data Binding:
      1. String Interpolation
      2. Property Binding [value]="" and Attribute Binding [attr.aria-hidden]="" or bind-value=""
      3. Event Binding: Used to bind data from View template to component class

    Two way Data Binding:
      1. [(ngModel)]
*/
}
