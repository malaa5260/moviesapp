import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  trendingMovies: any[] = [];
  pageNumber: number = 0;
  
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results;
    });
  }
  paginationHandler(page: number) {
    this.pageNumber = page;
  }
}
