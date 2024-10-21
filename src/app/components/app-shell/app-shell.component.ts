import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerSectionComponent } from '../banner-section/banner-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ToolsComponent } from '../tools/tools.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    BannerSectionComponent,
    AboutMeComponent,
    ToolsComponent,
    ProjectsComponent,
    ContactUsComponent,
    FooterComponent,
    SharedModule,
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent {
  currentSection = 'home';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
