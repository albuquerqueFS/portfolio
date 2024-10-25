import { Component, OnInit } from '@angular/core';

const assets = '/assets/img/';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.sass'],
})
export class TechsComponent implements OnInit {
  techs = [
    {
      companyLogo: assets + 'canadiantirelogo.png',
      description:
        'Working as a fullstack engineer, implementing a comprehensive data science platform to help them manage a complex product promotion pipeline.',
      frameworks: [
        { icon: assets + 'React.png', name: 'React' },
        { icon: assets + 'Python.png', name: 'Django' },
        { icon: assets + 'jest.svg', name: 'Jest' },
        { icon: assets + 'postgre.png', name: 'Postgre' },
        { icon: assets + 'nx.png', name: 'Monorepos' },
      ],
    },
    {
      companyLogo: assets + 'deltalogo.svg',
      description:
        'Working as a frontend engineer, building a complete platform from scratch to help them manage and optimize their pipeline for purchasing and stocking airplane parts.',
      frameworks: [
        { icon: assets + 'AngularJS.png', name: 'Angular' },
        { icon: assets + 'FastAPI.png', name: 'FastAPI' },
        { icon: assets + 'postgre.png', name: 'Postgre' },
      ],
    },
    {
      companyLogo: assets + 'walgreenslogo.png',
      description:
        'Working as a frontend engineer, building a platform where they could plan and automate the scheduling of product promotions optimized by data science models.',
      frameworks: [
        { icon: assets + 'React.png', name: 'React' },
        { icon: assets + 'Python.png', name: 'Django' },
        { icon: assets + 'postgre.png', name: 'Postgre' },
      ],
    },
    {
      companyLogo: assets + 'safralogo.png',
      description:
        'Working as a junior engineer, planning and building a system that streamlined investment account management and automated email reporting.',
      frameworks: [
        { icon: assets + 'AngularJS.png', name: 'Angular' },
        { icon: assets + 'csharp.png', name: '.NET CORE' },
        { icon: assets + 'postgre.png', name: 'Postgre' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  openUrl(link: string): void {
    window.open(link, '_blank');
  }
}
