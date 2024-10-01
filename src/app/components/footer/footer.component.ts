import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import {faAngular} from '@fortawesome/free-brands-svg-iconS'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
faAngular = faAngular
}
