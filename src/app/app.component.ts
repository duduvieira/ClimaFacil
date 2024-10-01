import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeathereasyComponent } from "./components/weathereasy/weathereasy.component";
import { FormComponent } from "./components/form/form.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeathereasyComponent, FormComponent, HeaderComponent, FooterComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClimaFacil';
  image = '/assets/jpg/background-weather.jpg'
}
