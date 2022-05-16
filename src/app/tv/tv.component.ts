import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  trendingTv: any[] = [];
  pageNumber: number = 0;
  constructor(private _MoviesService: MoviesService) {
   
  }
  ngOnInit(): void {
    this. _MoviesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results;
    });
  }
  paginationHandler(page: number) {
    this.pageNumber = page;
  }
}
