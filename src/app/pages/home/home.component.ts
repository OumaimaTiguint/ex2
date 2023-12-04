import { Component } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchComponent } from '../../shared/components/search/search.component';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
		CommonModule, 
		MatToolbarModule,
    	MatIconModule,
    	MatButtonModule,
		SearchComponent,
		HttpClientModule,
    	MovieCardComponent
	],
	providers: [MovieService],
  	templateUrl: './home.component.html',
  	styleUrl: './home.component.scss'
})
export class HomeComponent {
  movies: any[] = [];
  constructor(private moviesService: MovieService) {}

	ngOnInit(): void {
		this.moviesService.getMostPopularMovies().subscribe(res => {
			this.movies = res.slice(0, 8);
			// storing only the first 8 movies because the api has limited daily requests
		});
	}
}
