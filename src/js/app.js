// import {
//   Observable,
//   Subject,
//   fromEvent, from, of,
//   // range, merge, interval, combineLatest,
//   takeUntil,
// } from 'rxjs';
// import {
//   map, pluck, filter,
//   //  startWith,
//   debounceTime, distinctUntilChanged, catchError,
//   switchMap, exhaustMap,
//   startWith,
//   scan, share,
//   // mergeMap, cancatMap,
// } from 'rxjs/operators'; // или
// // import { map, pluck } from 'rxjs/operators'; // или

const body = document.querySelector('body');

function hello() {
  const helloH3 = document.createElement('h3');
  helloH3.textContent = 'Привет!!!';

  body.append(helloH3);
}

hello();
