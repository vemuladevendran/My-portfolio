import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Devendran-portfolio';

  ngOnInit() {
    AOS.init({
      duration: 1000
    });
  }
}
