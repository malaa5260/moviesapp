import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople:any[]=[];
  pageNumber: number = 0;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) {
   
   }
  
 
  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe((data) => {
      this.trendingPeople =data.results; 
    });
  }
  paginationHandler(page: number) {
    this.pageNumber = page;
  }
}
