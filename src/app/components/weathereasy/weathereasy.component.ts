import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTint, faWind, faCloudRain} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-weathereasy',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './weathereasy.component.html',
  styleUrl: './weathereasy.component.css'
})
export class WeathereasyComponent {
  faTint = faTint
  faWind = faWind
  faCloudRain = faCloudRain
}
