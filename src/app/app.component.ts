import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeathereasyComponent } from "./weathereasy/weathereasy.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeathereasyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClimaFacil';
  image = '/assets/jpg/background-weather.jpg'
}
