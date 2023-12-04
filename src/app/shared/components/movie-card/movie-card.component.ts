import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MovieInfoModalComponent } from '../movie-info-modal/movie-info-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  	selector: 'app-movie-card',
	standalone: true,
	imports: [
		CommonModule, 
		MatCardModule,
		MovieInfoModalComponent
	],
  	templateUrl: './movie-card.component.html',
  	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
	@Input() movieId: string = '';
	movieDetails: any;

	constructor(private moviesService: MovieService,
				public dialog: MatDialog) {}

	ngOnInit(): void {
		this.moviesService.getDetails(this.movieId?.replace(/^\/title\//, '')).subscribe(e => this.movieDetails = e);
	}

	openInfoDialog(movie: any) {
		this.dialog.open(MovieInfoModalComponent, {
			data: {
				movie: movie,
			},
			height: '98%',
            width: '100%'
		});
	}
}
