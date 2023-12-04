import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environment';

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	private apiUrl = "https://imdb8.p.rapidapi.com/title/"
	headers = new HttpHeaders({
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
		'X-RapidAPI-Key': `${environment.apiKey}`
	});

  	constructor(private http: HttpClient) { }

	getMostPopularMovies(): Observable<any> {
		return this.http.get(this.apiUrl + 'get-most-popular-movies', {headers: this.headers});
	}

	getTopRatedMovies(): Observable<any> {
		return this.http.get(this.apiUrl + 'get-top-rated-movies', {headers: this.headers});
	}

	getComingSoonMovies(): Observable<any> {
		return this.http.get(this.apiUrl + 'get-coming-soon-movies', {headers: this.headers});
	}

	getDetails(id: string): Observable<any> {
		const options = {
			params: { tconst: id },
			headers: this.headers
		};
		return this.http.get(this.apiUrl + 'get-details', options);
	}

	getOverview(): Observable<any> {
		return this.http.get(this.apiUrl + 'get-overview-details', {headers: this.headers});
	}
}
