import { Component } from '@angular/core';
import { Developer } from '../model/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  developer: Developer = new Developer(
    'Emilio',
    'Silverio',
    43,
    'homme',
    'étudie à la WildCodeSchool',
    [
      { name: 'HTML', logo: 'logo', site: 'HTML.fr' },
      { name: 'angular', logo: 'logo', site: 'angular.fr' },
    ]
  );
}

