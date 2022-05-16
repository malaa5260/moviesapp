import { Component, OnInit, OnDestroy  } from '@angular/core';
import { MoviePipe } from '../movie.pipe';
import { MoviesService } from '../services/movies.service';
import {EmployeeService} from '../services/employee.service';
import {IEmployee} from 'src/app/interface/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
})
export class HomeComponent implements OnInit, OnDestroy {
  searchTerm:string='';
  trendingMovies: any[] = [];
  trendingMoviesSections: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  subMovie: any;
  subTv: any;
  subPerson: any;
  isDisabled:boolean=false;
  showtrendingMovies:boolean=true;
  showtrendingTv:boolean=true;
  showtrendingPeople:boolean=true;
  name:string='';
  userText:string='mohamed';
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  employees:IEmployee[]=[];
  errorMessage = "";
  constructor(private _MoviesService: MoviesService,private _EmployeeService:EmployeeService) {
  }
 
  selectedValueEmployee='All';
  getTotalEmployeeCount():number{
   return this.employees.length;
  }
  getTotalEmployeeCountMale():number{
    return this.employees.filter(e=> e.gender === "Male").length;
  }
  getTotalEmployeeCountFemale():number{
    return this.employees.filter(e => e.gender ==='Female').length;
  }
  onEmployeeRadioButtonChanged(selectedValue:string):void{
    this.selectedValueEmployee = selectedValue;
    console.log(this.selectedValueEmployee);
  }
  getEmployees():void {
  this.employees=[{code:'1',name:'mohed',dateOfBirth:'11/10/2020',gender:'Male',annualSalary:5000},{code:'2',name:'alaa',gender:'Male',dateOfBirth:'11/10/2020',annualSalary:5000},{code:'3',name:'osman',dateOfBirth:'11/10/2020',gender:'Male',annualSalary:5000},{code:'4',name:'mahmoud',dateOfBirth:'11/10/2020',gender:'Male',annualSalary:5000}]
  }
  trackByEmpCode(_index:number,employee:any): string {
    return employee.code;
  }
  toggletrendingMovies(): void {
    this.showtrendingMovies=!this.showtrendingMovies;  }
  toggletrendingTv(): void {
    this.showtrendingTv=!this.showtrendingTv;
  }
  toggletrendingPeople(): void {
    this.showtrendingPeople=!this.showtrendingPeople;
  }
  onClick(): void {
    alert('button clicked');
    
  }
  
  ngOnInit(): void {
    this.employees = this._EmployeeService.getEmployesses();
    this.subMovie = this._MoviesService.getTrending('movie').subscribe((data) => {
    this.selectedValueEmployee==='All'
        this.trendingMovies = data.results;
        this.trendingMoviesSections=data.results.slice(0,4)
      
      // else if(this.selectedValueEmployee==='five'){
      //   this.trendingMovies = data.results.slice(0,5);
      // }
      // else if(this.selectedValueEmployee==='ten'){
      //   this.trendingMovies = data.results.slice(0, 10);
      // }
    });
    
    this.subTv = this._MoviesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0, 4);

    });
    this.subPerson = this._MoviesService.getTrending('person').subscribe((data) => {
      this.trendingPeople = data.results.slice(0, 4);
    });

  }



  ngOnDestroy(): void {
    this.subMovie.unsubscribe();
    this.subTv.unsubscribe();
    this.subPerson.unsubscribe();
  }
}


