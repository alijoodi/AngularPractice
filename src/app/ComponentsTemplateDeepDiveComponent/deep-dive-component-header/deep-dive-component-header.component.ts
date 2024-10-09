import { Component } from '@angular/core';
import { DeepDiveComponentNavbarComponent } from "../deep-dive-component-navbar/deep-dive-component-navbar.component";

@Component({
  selector: 'app-deep-dive-component-header',
  standalone: true,
  imports: [DeepDiveComponentNavbarComponent],
  templateUrl: './deep-dive-component-header.component.html',
  styleUrl: './deep-dive-component-header.component.css'
})
export class DeepDiveComponentHeaderComponent {

}
