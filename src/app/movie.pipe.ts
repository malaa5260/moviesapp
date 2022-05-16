import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class MoviePipe implements PipeTransform {

  // transform(movies: any[] | any, searchTerm: string): any[] {
  //   if (!movies || !searchTerm) {
  //     return movies;
  //   }
  //   return movies.filter((movie: { title: string; }) =>
  //     movie.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1 );
  // }
   transform(value:any,filterString:string){
     if(value.length === 0 || filterString === ''){
       return value;
     }
     const movies =[];
     for(const movie of value){
       if(movie['title'] === filterString){
         movies.push(movie);
       }
    
     }
     return movies;
   }
   

}
