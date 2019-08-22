import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes:Heroe[]=[];


  constructor(private _heroesService:HeroesService,
              private _route:Router) { }

  ngOnInit() {
      this.heroes= this._heroesService.getHeroes();
      console.log(this.heroes);
      //this.version();
  }

  verHeroe(id:number){
      this._route.navigate(['/heroe', id]);
  }
    
}
