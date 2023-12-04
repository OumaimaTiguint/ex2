import {CommonModule} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MovieService} from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'app-movie-info-modal',
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule,
		MatSelectModule,
		HttpClientModule
	],
	providers: [MovieService],
	templateUrl: './movie-info-modal.component.html',
	styleUrl: './movie-info-modal.component.scss'
})
export class MovieInfoModalComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
				private movieService: MovieService) {}

	ngOnInit(): void {
		this.movieService.getMostPopularMovies().subscribe((movie: any[]) => {
			if (movie.find(movie => movie.title == this.data.movie.title)) {
				this.data.movie = movie.find(movie => movie.title == this.data.movie.title);
			}
		});
	}
			
}
