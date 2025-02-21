import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectDetails: any = [
    {
      name: 'Raaonline',
      img: '/assets/projects/raa.png',
      link: 'https://raaonline.co.in/',
      git: '',
      description:
        'An e-learning platform designed for medical students, where I contributed to building an engaging user interface and seamless features. The platform facilitates interactive learning and efficient content delivery tailored to medical education.',
    },
    {
      name: 'BLR',
      img: '/assets/projects/blr.png',
      link: '',
      git: '',
      description:
        'Developed during the COVID-19 pandemic in 2021 to help people find real-time availability of essential medical resources like hospital beds, oxygen, and medicines. The platform aimed to ease the search for life-saving necessities during the crisis.',
    },
    {
      name: 'Covid 19',
      img: '/assets/projects/covid.png',
      link: 'https://info-526-s24.github.io/project-final-GraphGeeks/',
      git: 'https://github.com/INFO-526-S24/project-final-GraphGeeks',
      description:
        'A data visualization project that uses COVID-19 data to display trends in infection rates, recoveries, and other key metrics. The project helps users gain deeper insights into the pandemic through interactive charts and graphs.',
    },
    {
      name: 'Childcare Cost',
      img: '/assets/projects/childcare.png',
      link: 'https://info-526-s24.github.io/project-01-InsightSquad/presentation.html#/title-slide',
      git: 'https://github.com/INFO-526-S24/project-01-InsightSquad',
      description:
        'Visualized data on average unemployment rates and rising childcare costs across U.S. states. This project enables users to explore and compare trends using interactive visualizations, providing valuable insights for researchers.',
    },
    {
      name: 'HR Dashboard',
      img: '/assets/projects/hr.png',
      link: 'https://public.tableau.com/views/HRDashboard_17272400313210/HRSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      git: '',
      description:
        "Created an HR Dashboard using Tableau with data generated from Python's Faker library and ChatGPT. The dashboard includes employee demographics, performance, and salary trends, providing actionable insights for HR management",
    },
    {
      name: 'PEC Student',
      img: '/assets/projects/pecstudent.png',
      link: '',
      git: 'https://github.com/vemuladevendran/pec-student',
      description:
        'Developed a comprehensive database for managing student and faculty data, including personal details, grades, assignments, and timetables. The system streamlines operations and enhances data accessibility for college administrators.',
    },
  ];

  currentProjects: any = [
    {
      name: 'Expense Prediction App',
      img: '/assets/projects/expense.webp',
      description:
        'Developing a cross-platform expense tracking application using Ionic and Angular for the frontend, with Node.js and MongoDB handling the backend. The app enables users to log daily and weekly expenses, categorize spending, and gain financial insights through visual analytics and predictive suggestions. Integrating a machine learning model trained on synthetic data to predict next month’s expenses based on past spending patterns. Using MongoDB for efficient data storage and retrieval, ensuring accuracy in financial forecasting.Technologies: Ionic, Angular, Node.js, MongoDB, Machine Learning.',
      git: '',
    },
  ];
}
