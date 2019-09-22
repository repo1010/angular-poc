import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Hero[] ;

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().
    subscribe(heroes => this.heroes = heroes);
  }

  addHero(name : string) {
    this.heroService.addHero({name} as Hero).
    subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  deleteHero(hero : Hero){
    this.heroService.deleteHero(hero).subscribe();
    this.heroes = this.heroes.filter(h => h!==hero);
  }
}
