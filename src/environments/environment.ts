// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //hmr: false,
  trendingUrl: 'https://api.themoviedb.org/3/trending/',
  apiTrending:'week?api_key=2e203d1deb36ecf317e51549c519f9ad',
  apiMovie:'api_key=2e203d1deb36ecf317e51549c519f9ad&language=en-US',
  movieUrl :'https://api.themoviedb.org/3/movie/',
  apiAuth: 'https://route-egypt-api.herokuapp.com', 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
