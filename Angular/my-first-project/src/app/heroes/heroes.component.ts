import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero ={
    id: 0,
    name: "WindStorm"
  }

}
