import { Component } from '@angular/core';
import { BannerSectionComponent } from "../../components/banner-section/banner-section.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ToolsComponent } from "../../components/tools/tools.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerSectionComponent, AboutMeComponent, ToolsComponent, ProjectsComponent, ContactUsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
