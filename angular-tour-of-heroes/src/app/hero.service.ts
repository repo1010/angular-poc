import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'g/heroes';
  constructor(private http: HttpClient, private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl).
    pipe(
      tap(_ => this.log('fetched Heroes')),
      catchError(this.hadleError('getHeroes',[]))
    );
  }

  getHero(id: number) : Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(url).pipe(
      tap(_ => `HeroService : id=${id}`),
      catchError(this.hadleError<Hero>(`getHero id=${id}`))
    );
  }

  hadleError<T> (operation='operation', result? : T) {
    return (error : any) : Observable<T> => {
      console.error(error);

      this.log(`${operation} failed : ${error.message}`);
      
      return of(result as T);
    };
  }

  private log(message : string){
    this.messageService.add(`HeroService : ${message}`);
  }

  updateHero(hero : Hero) : Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`Updated hero id=${hero.id}`)),
      catchError(this.hadleError<any>('Updatd hero'))
    )
  }

  addHero(hero : Hero) : Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero : Hero) => this.log(`Created new Hero id=${hero.id}`)),
      catchError(this.hadleError<Hero>('AddHeo'))
    )
  };

  deleteHero(hero: Hero | number) : Observable<Hero> { 
    const id = typeof hero === 'number' ? hero : hero.id; 
    const url = `${this.heroesUrl}/${id}`;

     return this.http.delete<Hero>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted hero with id=${id}`)),
        catchError(this.hadleError<Hero>('deleteHero'))
     );
  }

  searchHeroes(term: string) : Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }

   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_=> this.log(`found hero matching ${term}`)),
      catchError(this.hadleError<Hero[]>('searchHeroes',[]))
    );
  }
}
