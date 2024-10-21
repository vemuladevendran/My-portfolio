import { Component } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [NgxTypewriterComponent],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent {
  words: string[] = ['Data Analyst', 'FullStack Developer', 'Front End Developer', 'Web Developer', 'Mobile App Developer'];
}
