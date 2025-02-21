import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import sal from 'sal.js';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent implements AfterViewInit  {
  techCategories = {
    frontendDevelopment: [
      { img: '/assets/tech/javascript.png', name: 'JavaScript' },
      { img: '/assets/tech/typescript.png', name: 'TypeScript' },
      { img: '/assets/tech/angular.png', name: 'Angular' },
      { img: '/assets/tech/react.png', name: 'React JS' },
      { img: '/assets/tech/reactnative.png', name: 'React Native' },
      { img: '/assets/tech/html.png', name: 'HTML' },
      { img: '/assets/tech/css.png', name: 'CSS' },
      { img: '/assets/tech/bootstrap.png', name: 'Bootstrap' },
      // { img: '/assets/tech/tailwind.png', name: 'Tailwind' },
      { img: '/assets/tech/sass.png', name: 'Sass' },
      { img: '/assets/tech/ionic.png', name: 'Ionic' },
      { img: '/assets/tech/git.png', name: 'Git' },
      { img: '/assets/tech/postman.png', name: 'Postman' }
    ],
    backendDevelopment: [
      { img: '/assets/tech/node.png', name: 'Node.js' },
      { img: '/assets/tech/express.png', name: 'Express.js' },
      { img: '/assets/tech/firebase.png', name: 'Firebase' },
      { img: '/assets/tech/redux.png', name: 'Redux' },
      { img: '/assets/tech/mongodb.png', name: 'MongoDB' },
      { img: '/assets/tech/sql.png', name: 'SQL' }
    ],
    dataAnalysis: [
      { img: '/assets/tech/python.png', name: 'Python' },
      { img: '/assets/tech/r.png', name: 'R Language' },
      { img: '/assets/tech/tableau.png', name: 'Tableau' },
      { img: '/assets/tech/powerbi.png', name: 'Power BI' },
      { img: '/assets/tech/azure.png', name: 'Azure' },
      { img: '/assets/tech/docker.png', name: 'Docker' }
    ]
  };

  ngAfterViewInit(): void {
    sal({
      root: null,
      once: false,
    });
  }
}
