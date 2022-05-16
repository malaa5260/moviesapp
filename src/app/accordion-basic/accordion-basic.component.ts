import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-accordion-basic',
  templateUrl: './accordion-basic.component.html',
  styleUrls: ['./accordion-basic.component.scss']
})
export class AccordionBasicComponent implements OnInit {
  trendingMovies: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService,private _NgbAlertConfig:NgbAlertConfig) { }
  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results;
     this._NgbAlertConfig.type = 'info';
     this._NgbAlertConfig.dismissible=false;

    });
  }

}
