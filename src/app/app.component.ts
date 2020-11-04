import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];
}
  
// import { Component } from '@angular/core';
// import { Goal } from './goal';


// export class AppComponent {
//   goals:Goal[] = [
//     {id:1, name:'Watch finding Nemo'},
//     {id:2,name:'Buy Cookies'},
//     {id:3,name:'Get new Phone Case'},
//     {id:4,name:'Get Dog Food'},
//     {id:5,name:'Solve math homework'},
//     {id:6,name:'Plot my world domination plan'},
//   ];
// }



