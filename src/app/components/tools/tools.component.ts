import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
  techDetails =  [
    {
      img: '/assets/tech/javascript.png',
      name: 'Java Script'
    },
    {
      img: '/assets/tech/typescript.png',
      name: 'Type Script'
    },
    {
      img: '/assets/tech/r.png',
      name: 'R Language'
    },
    {
      img: '/assets/tech/tableau.png',
      name: 'Tableau'
    },
    {
      img: '/assets/tech/angular.png',
      name: 'Angular'
    },
    {
      img: '/assets/tech/react.png',
      name: 'React Js'
    },
    {
      img: '/assets/tech/reactnative.png',
      name: 'React Native'
    },
    {
      img: '/assets/tech/html.png',
      name: 'HTML'
    },
    {
      img: '/assets/tech/css.png',
      name: 'Css'
    },
    {
      img: '/assets/tech/bootstrap.png',
      name: 'Bootstrap'
    },
    {
      img: '/assets/tech/node.png',
      name: 'Node Js'
    },
    {
      img: '/assets/tech/express.png',
      name: 'Express Js'
    },
    {
      img: '/assets/tech/mongodb.png',
      name: 'MongoDB'
    },
    {
      img: '/assets/tech/powerbi.png',
      name: 'Power BI'
    },
    {
      img: '/assets/tech/sass.png',
      name: 'Sass'
    },
    {
      img: '/assets/tech/firebase.png',
      name: 'Firebase'
    },
    {
      img: '/assets/tech/ionic.png',
      name: 'Ionic'
    },
    {
      img: '/assets/tech/tailwind.png',
      name: 'tailwind'
    },
    {
      img: '/assets/tech/postman.png',
      name: 'Postman'
    },
    {
      img: '/assets/tech/redux.png',
      name: 'Redux'
    },
    {
      img: '/assets/tech/sql.png',
      name: 'SQL'
    },
    {
      img: '/assets/tech/git.png',
      name: 'Git'
    }
  ]
}
