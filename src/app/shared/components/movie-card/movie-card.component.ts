import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  	selector: 'app-movie-card',
	standalone: true,
	imports: [
		CommonModule, 
		MatCardModule
	],
  	templateUrl: './movie-card.component.html',
  	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
	@Input() movieId: string = '';
	movieDetails: any;

	constructor(private moviesService: MovieService) {}

	ngOnInit(): void {
		this.moviesService.getDetails(this.movieId?.replace(/^\/title\//, '')).subscribe(e => this.movieDetails = e);
	}
}
